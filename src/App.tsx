import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
        {/* Header */}
        <header className="fixed w-full top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-lg dark:shadow-gray-800/30">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <img
                src="https://8xbet-xo-so-vn-viet-nam.vercel.app/8xbet_light_.svg"
                className="h-8"
                alt="8xbetlogo"
              />
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-800" />
                )}
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-900 dark:to-indigo-900">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
              <div className="text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                  Top Những Ứng Dụng Theo Dõi Kết Quả Xổ Số Tốt Nhất
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mb-8"></div>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
            <div className="rounded-2xl max-w-3xl overflow-hidden m-auto shadow-2xl">
              <img
                src="https://8xbet-xo-so-vn-viet-nam.vercel.app/xo-so-truc-tuyen-tuong-lai-cua-the-gioi-may-rui.webp"
                alt="xo-so-truc-tuyen-tuong-lai-cua-the-gioi-may-rui"
                className="w-full  object-cover"
              />
            </div>
          </section>

          {/* Content Sections */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Introduction */}
            <section className="max-w-5xl mx-auto mb-24">
              <div className="prose dark:prose-invert prose-lg mx-auto text-justify">
                <p className="text-gray-700 dark:text-gray-300 italic  text-xl leading-relaxed">
                  <strong>Xổ số trực tuyến</strong> – Trò chơi tưởng như đã quá
                  quen thuộc nhưng vẫn luôn có cách để giữ chân anh em đam mê
                  vận may và thách thức.
                </p>
                <p className="text-gray-700 dark:text-gray-300 italic  text-xl mt-6">
                  Nhờ áp dụng công nghệ hiện đại, xổ số 8xbet đã nâng cấp trò
                  chơi xổ số thành một đấu trường giải trí đỉnh cao, nơi anh em
                  vừa thỏa sức theo đuổi đam mê, vừa dễ dàng thu thập những phần
                  thưởng giá trị.
                </p>
                <p className="text-gray-700 dark:text-gray-300 italic  text-xl mt-6">
                  Vậy, điều gì khiến cho <strong>Xổ số trực tuyến</strong> trở
                  nên đặc biệt đến thế? Hãy cùng <strong>8xbet</strong> khám phá
                  và cảm nhận sự khác biệt mà anh em không nên bỏ lỡ nhé!
                </p>
              </div>
            </section>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 gap-16">
              {/* Section 1 */}
              <section className="bg-white dark:bg-gray-800 text-justify rounded-3xl p-8 sm:p-12 shadow-xl dark:shadow-gray-900/50 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400 border-b pb-4 border-gray-200 dark:border-gray-700">
                  Xổ số trực tuyến 8xbet là gì?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-5">
                  Xổ số trực tuyến 8xbet là một bước tiến vượt bậc so với các
                  loại xổ số truyền thống, mang lại cho anh em những trải nghiệm
                  thú vị, hấp dẫn ngay từ lần đầu tham gia. Một tấm vé nhỏ xíu,
                  nhưng ẩn chứa cả một vũ trụ cơ hội và sự bất ngờ, khiến từng
                  phút giây đều trở nên cuốn hút.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-5">
                  Khi đặt chân vào thế giới xổ số tại 8xbet, anh em sẽ khám phá
                  một sân chơi hoàn toàn khác biệt, nơi hội tụ sự mới mẻ và lôi
                  cuốn mà khó nơi nào sánh được. Từng chi tiết, từng tính năng
                  đều được thiết kế để tạo nên một trải nghiệm không chỉ thú vị
                  mà còn đầy cảm xúc. Dù anh em yêu thích kiểu chơi truyền thống
                  hay muốn thử thách bản thân với những hình thức hiện đại,
                  8xbet luôn sẵn sàng đáp ứng mọi đam mê của anh em.
                </p>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-5">
                  <a href="https://8xbet.international/" target="_blank">
                    <img
                      src="https://8xbet-xo-so-vn-viet-nam.vercel.app/kinh-nghiem-choi-xo-so-truc-tuyen-tai-8xbet.webp"
                      alt="kinh-nghiem-choi-xo-so-truc-tuyen-tai-8xbet"
                      className="rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                    />
                  </a>
                  <div className="space-y-6">
                    <p className="text-gray-700 dark:text-gray-300">
                      Không chỉ thế, khi quyết định đồng hành cùng sân chơi của
                      chính tôi, đó cũng là lúc anh em đặt niềm tin vào một địa
                      chỉ uy tín, chuyên nghiệp bậc nhất. 8xbet không chỉ mang
                      đến những cơ hội vàng để thử sức với vận may, mà còn đảm
                      bảo mọi giao dịch diễn ra minh bạch, nhanh chóng và an
                      toàn tuyệt đối.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Xổ số online 8Xbet không chỉ là nơi để giải trí, mà còn là
                      điểm tựa vững chắc để anh em tự tin chinh phục những thử
                      thách và vươn tới những phần thưởng xứng đáng.
                    </p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400 border-b pb-4 border-gray-200 dark:border-gray-700">
                  Tương lai của xổ số trực tuyến
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-5">
                  Nhờ sự phát triển của công nghệ, người chơi có thể dễ dàng xổ
                  số trực tuyến, theo dõi kết quả và nhận thưởng ngay tại nhà.
                  Xổ số trực tuyến mang đến cho người chơi nhiều trải nghiệm thú
                  vị hơn, tiện lợi hơn và cơ hội trúng thưởng cao hơn so với
                  hình thức truyền thống.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-5">
                  Chính vì vậy, xổ số trực tuyến đang được xem là tương lai của
                  thế giới may rủi.
                </p>
              </section>

              {/* Section 2 */}
              <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 sm:p-12 shadow-xl">
                <h2 className="text-3xl font-bold mb-12 text-blue-600 dark:text-blue-400">
                  Điểm tên các loại hình xổ số online cực hot tại 8xbet
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-5">
                  8xbet không chỉ là một sân chơi cá cược hấp dẫn mà còn là nơi
                  quy tụ đa dạng các loại hình xổ số khiến anh em mê mẩn. Mỗi
                  loại hình đều mang một phong cách riêng, đáp ứng nhu cầu giải
                  trí của mọi người chơi. Dưới đây là những siêu phẩm mà anh em
                  không thể bỏ lỡ khi đặt chân vào sân chơi này:
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      Xổ số 3 miền truyền thống
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-5">
                      Dành cho anh em yêu thích sự đơn giản và quen thuộc, xổ số
                      truyền thống tại 8xbet mang đến những phút giây hồi hộp
                      như ngày đầu tiên cầm tấm vé số trên tay. Điểm cộng lớn
                      nhất của hình thức này chính là sự tiện lợi vượt trội.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Anh em chỉ cần chọn con số yêu thích, đặt cược, và chờ đợi
                      kết quả được công bố. Với tỷ lệ trả thưởng cao cùng sự
                      minh bạch tuyệt đối, xổ số truyền thống tại 8xbet không
                      chỉ là một lựa chọn an toàn mà còn đầy tính giải trí.
                    </p>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      Xổ số Mega
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-5">
                      Xổ số Mega là một trong những loại hình thu hút sự chú ý
                      lớn nhất tại 8xbet, bởi giải thưởng hấp dẫn vượt xa so với
                      các hình thức thông thường. Điểm nổi bật của Mega là giá
                      trị giải thưởng không ngừng tăng lên nếu chưa có người
                      chiến thắng, tạo nên sức hút không thể cưỡng lại.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-5">
                      Xổ số Mega là một trong những loại hình thu hút sự chú ý
                      lớn nhất tại 8xbet, bởi giải thưởng hấp dẫn vượt xa so với
                      các hình thức thông thường. Điểm nổi bật của Mega là giá
                      trị giải thưởng không ngừng tăng lên nếu chưa có người
                      chiến thắng, tạo nên sức hút không thể cưỡng lại.
                    </p>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      Xổ số Siêu tốc
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Xổ số siêu tốc chắc chắn là lựa chọn hàng đầu dành cho anh
                      em không thích chờ đợi. Chỉ trong vài phút, kết quả sẽ
                      được công bố, mang lại cảm giác hứng khởi và phấn khích
                      không thể cưỡng lại. Với hình thức chơi nhanh gọn nhưng
                      không kém phần hấp dẫn, xổ số siêu tốc tại 8xbet hứa hẹn
                      giúp anh em vừa giải trí vừa săn thưởng trong thời gian
                      ngắn.
                    </p>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      Xổ số Vip
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Xổ số VIP được thiết kế dành riêng cho những anh em muốn
                      tìm kiếm trải nghiệm khác biệt và cao cấp. Không chỉ mang
                      lại những cơ hội thắng lớn, xổ số VIP còn tạo cảm giác độc
                      quyền với các chương trình ưu đãi đặc biệt, tỷ lệ trả
                      thưởng vượt trội và những lợi ích riêng dành cho hội viên.
                      Đây không chỉ là một trò chơi mà còn là cách để anh em thể
                      hiện đẳng cấp và tận hưởng những dịch vụ tốt nhất tại
                      8xbet.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-xl">
                <h2 className="text-3xl font-bold mb-12 text-blue-600 dark:text-blue-400">
                  Kinh nghiệm chơi xổ số 8xbet giúp anh em thắng lớn
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-5">
                  <a href="https://8xbet.international/" target="_blank">
                    <img
                      src="https://8xbet-xo-so-vn-viet-nam.vercel.app/kinh-nghiem-choi-xo-so-truc-tuyen-tai-8xbet.webp"
                      alt="kinh-nghiem-choi-xo-so-truc-tuyen-tai-8xbet"
                      className="rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                    />
                  </a>
                  <div className="space-y-6">
                    <p className="text-gray-700 dark:text-gray-300">
                      Nếu chỉ trông chờ vào vận may, khả năng đổi đời của anh em
                      sẽ rất mong manh. Để gia tăng cơ hội chiến thắng, anh em
                      hãy tham khảo ngay những bí quyết từ các cao thủ sau đây:
                    </p>
                  </div>
                </div>
                <div className="space-y-8 ">
                  <div className="bg-gray-50 dark:bg-gray-700/50 text-justify rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                      <strong>Hiểu rõ luật chơi xổ số:</strong>{" "}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-justify">
                      Trước khi quyết định đặt cược, anh em nên tìm hiểu tường
                      tận các quy định và cách thức hoạt động của loại hình xổ
                      số mình chọn. Việc nắm vững luật chơi sẽ giúp anh em tự
                      tin hơn trong mỗi quyết định đặt cược của mình.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                      <strong>
                        Thử sức với các loại hình xổ số khác nhau:
                      </strong>{" "}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-justify">
                      Mỗi loại xổ số đều có cách chơi và tỷ lệ trúng thưởng khác
                      nhau. Nếu chưa thành công với một hình thức, anh em có thể
                      khám phá những loại khác phù hợp hơn với phong cách của
                      mình. Đa dạng hóa lựa chọn cũng là cách để tìm ra chiến
                      lược hiệu quả nhất.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                      <strong>Đầu tư vào kiến thức phân tích:</strong>{" "}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Nếu có thời gian, anh em nên học thêm các phương pháp
                      thống kê, soi cầu, hoặc dự đoán số học. Những công cụ này
                      sẽ giúp anh em đưa ra quyết định dựa trên dữ liệu thay vì
                      cảm tính.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                      <strong>Chơi theo nhóm:</strong>{" "}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Việc hợp tác với bạn bè hoặc người quen để cùng mua vé số
                      có thể giúp anh em tăng số lượng vé mà không phải bỏ ra
                      quá nhiều chi phí. Khi trúng thưởng, giải thưởng sẽ được
                      chia đều, vừa tiết kiệm vừa tăng cơ hội thắng lớn.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900 py-16">
            <div className="max-w-4xl mx-auto px-4 text-justify">
              <p className="text-xl text-white/90 italic leading-relaxed">
                Những phút giây hồi hộp và thú vị tại{" "}
                <strong className="text-yellow-300">
                  Xổ số trực tuyến 8xbet
                </strong>{" "}
                hẳn đã khiến anh em cảm nhận được sự lôi cuốn không thể cưỡng
                lại của trò chơi này rồi, đúng không nào? Vậy thì đừng bỏ lỡ cơ
                hội để mỗi tấm vé số trở thành chiếc chìa khóa đưa anh em tiến
                gần hơn tới ước mơ thay đổi cuộc đời.
              </p>
              <p className="text-xl text-white/90 italic leading-relaxed">
                Tham gia <strong className="text-yellow-300">8xbet</strong> ngay
                hôm nay, anh em sẽ được bước vào hành trình khám phá những con
                số đầy may mắn, tận hưởng niềm vui chiến thắng và viết nên câu
                chuyện thành công của riêng mình nhé!
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto py-8 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <img
                src="https://8xbet-xo-so-vn-viet-nam.vercel.app/8xbet_light_.svg"
                className="h-8"
                alt="8xbetlogo"
              />
              <p className="text-gray-500 dark:text-gray-400">
                8xbet © 2025. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
