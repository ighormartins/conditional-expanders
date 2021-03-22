!Package created to test create-react-library

# conditional-expanders

> Conditionally expand arrays and objects with an easy to read syntax

[![NPM](https://img.shields.io/npm/v/conditional-expanders.svg)](https://www.npmjs.com/package/conditional-expanders) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save conditional-expanders
```

## Usage

```tsx
import { IfAdd, IfPush } from 'conditional-expanders'
import { useState } from 'react'

const App = () => {
  const GetFilters = ({
    category,
    price_range,
    sort,
    autoSortPopularity,
    includeRating
  }: any) => ({
    order_by: [
      ...IfPush(sort, { [sort]: IOrder_By.Asc }),
      ...IfPush(autoSortPopularity, { popularity: IOrder_By.Desc })
    ],
    fields: ['name', 'price', ...IfPush(includeRating, 'rating')],
    where: {
      _and: {
        ...IfAdd(category, { category_id: category }),
        ...IfAdd(price_range, {
          price_retail_base: {
            _gte: +price_range.from,
            _lte: +price_range.to || 10000
          }
        })
      }
    }
  })

  return (
    <MyApp>
      <AmazingQuery filters={GetFilters()} />
    </MyApp>
  )
}
```

### Without conditional expanders

```tsx
import { IfAdd, IfPush } from 'conditional-expanders'
import { useState } from 'react'

const App = () => {
  const GetFilters = ({
    category,
    price_range,
    sort,
    autoSortPopularity,
    includeRating
  }: any) => ({
    order_by: [
      ...(sort ? [{ [sort]: IOrder_By.Asc }] : []),
      ...(autoSortPopularity ? { popularity: IOrder_By.Desc } : {})
    ],
    fields: ['name', 'price', ...(includeRating ? ['rating'] : [])],
    where: {
      _and: {
        ...(category ? { category_id: category } : {}),
        ...(price_range
          ? {
              price_retail_base: {
                _gte: +price_range.from,
                _lte: +price_range.to || 10000
              }
            }
          : {})
      }
    }
  })

  return (
    <MyApp>
      <AmazingQuery filters={GetFilters()} />
    </MyApp>
  )
}
```

## License

MIT © [ighormartins](https://github.com/ighormartins)
