// 編寫驗證規則
export const rules = {
  name: [
    {
      required: true,
      message: '用戶名是必傳內容',
      trigger: 'blur' // 失去焦點時驗證
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用戶名必須是5~10個字母或數字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密碼是必傳內容',
      trigger: 'blur' // 失去焦點時驗證
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用戶名必須是3位以上的字母或數字',
      trigger: 'blur'
    }
  ]
}
