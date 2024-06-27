import Link from 'next/link'
import { useRouter } from 'next/router'
import LoginPanel from '@/components/user/login-panel'
import LogoutPanel from '@/components/user/logout-panel'

import { useAuth } from '@/hooks/use-auth'

export default function Login() {
  const router = useRouter()

  // 使用context得到auth
  // const { auth } = useContext(AuthContext)
  const { auth } = useAuth()

  return (
    <>
      <h1>會員登入頁</h1>
      <hr />
      <Link href="/cs-0625/user/profile"> 連至 會員個人資料頁(Link)</Link>
      <br />
      <button
        onClick={() => {
          // 如果是用類似按鈕，或是事件觸發、商業邏輯操作等情況，要轉至別的頁面使用router.push
          router.push('/cs-0625/user/profile')
        }}
      >
        連至 會員個人資料頁(Link)
      </button>
      <br />
      <a href="/cs-0625/user/profile">連至 會員個人資料頁(a)</a>
      <br />
      {auth.isAuth ? <LogoutPanel /> : <LoginPanel />}
    </>
  )
}
