export interface User {
  id: string,
  role: string,
  sensitiveInformation: string //imagine this is some stuff we do NOT want in the local storage, but need to load from a service for some components
}
