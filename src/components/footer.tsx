import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-8">
          {/* Left section */}
          <div className="sm:col-span-2 md:col-span-7">
            <p className="text-sm mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-10">
               (주)한국기술자산
            </h2>

            <Link
              href="https://walla.my/v/b1An8BpswJfRBo6VnhoR"
              className="inline-flex items-center text-white bg-[var(--zoop-blue)] rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-medium transition-colors hover:bg-[var(--zoop-blue-light)] active:bg-[var(--zoop-blue-light)]"
            >
              CONTACT
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Middle section - Navigation */}
          {/* <div className="sm:col-span-1 md:col-span-2 mt-8 sm:mt-0">
            <p className="font-medium mb-4 text-sm">Navigation</p>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:underline underline-offset-4 inline-block py-1">
                  집 보러가기
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:underline underline-offset-4 inline-block py-1">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link href="https://zoopzoop.channel.io/home" className="hover:underline underline-offset-4 inline-block py-1">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline underline-offset-4 inline-block py-1">
                  로그인
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Right section - App & Company Info */}
          <div className="sm:col-span-1 md:col-span-5 text-sm mt-8 sm:mt-0">
            <div className="mb-8 pt-4">
              <p className="font-medium mb-4">Navigation</p>
              <div className="flex gap-4">
                {/* <Link
                  href="#"
                  className="w-full flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition-colors active:bg-gray-200"
                >
                  <span>App Store</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-full flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition-colors active:bg-gray-200"
                >
                  <span>Google Play</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link> */}
                <ul className="space-x-3 sm:space-x-4 text-sm flex flex-row justify-between w-full">

                  <li>
                    <Link href="/service" className="hover:underline underline-offset-4 inline-block py-1">
                      서비스 소개
                    </Link>
                  </li>
                  <li>
                    <Link href="https://walla.my/v/b1An8BpswJfRBo6VnhoR" className="hover:underline underline-offset-4 inline-block py-1">
                      문의하기
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>

            {/* Company Information */}
            <div className="text-xs text-gray-500">
              <p className="font-medium text-sm text-gray-900 mb-3">Company Information</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p>업체명: (주)한국기술자산</p>
                  <p>대표자 성명: 박준영</p>
                  <p>본사: 경상북도 포항시 남구 청암로 87 309-5호</p>
                  {/* <p>통신판매업 신고번호: -</p> */}
                </div>
                <div className="space-y-1">
                  
                  <p>서울지점:서울시 종로구 종로6 5층 S.빌리지</p>                  
                  <p>
                    이메일:{" "}
                    <a href="mailto:contact@techasset.co.kr" className="hover:underline">
                      contact@techasset.co.kr
                    </a>
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Copyright and Terms */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 text-xs sm:text-sm flex flex-col sm:flex-row justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} (주)한국기술자산. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/policy/terms" className="hover:underline underline-offset-2">
              이용약관
            </Link>
            <Link href="/policy/privacy" className="hover:underline underline-offset-2">
              개인정보처리방침
            </Link>
            <Link href="/policy/marketing" className="hover:underline underline-offset-2">
              마케팅 수신동의
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
