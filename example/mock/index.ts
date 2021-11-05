import { createProdMockServer } from '@vonor/mock'
import user from './user'
import menu from './menu'
import role from './role'
import department from './department'
import category from './category'
import goods from './goods'
import chart from './chart'

const mockList = [...user, ...role, ...menu, ...department, ...category, ...goods, ...chart]

export default createProdMockServer(mockList)
