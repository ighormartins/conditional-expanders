export function IfPush<T>(condition: any, pushContent: T): T[] {
  return condition ? [pushContent] : []
}

export function IfAdd<T>(condition: any, addContent: T): T | {} {
  return condition ? addContent : {}
}
