interface BoxPropsInterface {
  id: string,
  width: number,
  height: number,
  backgroundColor: string,
}

interface BoxPropsInterfaceAndRemove extends BoxPropsInterface {
  remove: (id:string) => void
}

interface FormInterface

export type { BoxPropsInterface, BoxPropsInterfaceAndRemove };