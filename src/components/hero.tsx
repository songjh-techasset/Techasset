import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-4 pt-32 pb-12 flex flex-col items-center">
      {/* Badge */}
      <div className="mb-6">
        <span className="inline-block px-4 py-1 rounded-full bg-[var(--zoop-gray)]/30 text-[var(--zoop-blue)] border border-[var(--zoop-gray)]/50 text-sm font-medium">
           TECHNOLOGY ASSET KOREA
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl leading-snug font-bold text-center mb-12 max-w-4xl">
        (주) 한국기술자산
        <br className="" />
        리뉴얼 작업 후 곧 찾아뵙겠습니다
        <br className="block sm:hidden" />
        
      </h1>

      {/* Image */}
      <div className="w-full max-w-5xl">
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/Picture1.jpg"
            alt="Modern wooden and brick house"
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
