import { createEleganceClient } from "@singlestore/elegance-sdk"

export const eleganceClient = createEleganceClient("mysql", {
  baseURL: `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api`
})
