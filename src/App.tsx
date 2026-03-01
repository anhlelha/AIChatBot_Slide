import React from 'react';
import { 
  Bot, Clock, MessageSquare, CreditCard, 
  CheckCircle2, TrendingUp, Zap, Shield, 
  Headset, Smartphone, Users, Star, ArrowRight,
  Database, Lock
} from 'lucide-react';

const Slide = ({ children, autoHeight = false, className = '' }: { children: React.ReactNode, autoHeight?: boolean, className?: string }) => {
  return (
    <section className={`slide ${autoHeight ? 'slide-auto' : 'slide-full'} ${className}`}>
      <div className="slide-content">
        {children}
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="presentation-container bg-bg-light">
      {/* Slide 1: Welcome */}
      <Slide className="bg-primary text-white text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-white p-6 rounded-full shadow-lg">
            <Bot size={80} className="text-primary" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">AI4All</h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-accent">Nhân viên ảo 24/7 cho doanh nghiệp của bạn</h2>
        <p className="text-xl md:text-2xl italic opacity-90 mb-12">"Không bao giờ bỏ lỡ một khách hàng nào"</p>
        <div className="inline-block bg-secondary/20 border border-secondary/30 rounded-xl p-6 backdrop-blur-sm">
          <p className="text-lg font-medium">Giải pháp tự động hóa CSKH & Bán hàng giúp bạn rảnh tay mà doanh thu vẫn tăng.</p>
        </div>
      </Slide>

      {/* Slide 2: Pain Points */}
      <Slide>
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Nỗi đau của chủ doanh nghiệp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
            <div className="bg-warning/10 p-3 rounded-lg text-warning shrink-0">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Mất khách vào đêm muộn</h3>
              <p className="text-gray-600">Khách nhắn tin lúc 2 giờ sáng nhưng không ai trả lời &rarr; Mất khách vào tay đối thủ.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
            <div className="bg-warning/10 p-3 rounded-lg text-warning shrink-0">
              <Users size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Chi phí nhân sự cao</h3>
              <p className="text-gray-600">Phải thuê nhân viên trực chat xoay ca &rarr; Chi phí lương cao, dễ sai sót.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
            <div className="bg-warning/10 p-3 rounded-lg text-warning shrink-0">
              <MessageSquare size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tốn thời gian lặp lại</h3>
              <p className="text-gray-600">Khách hỏi đi hỏi lại những câu quen thuộc (giá phòng, địa chỉ, menu) &rarr; Tốn thời gian.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
            <div className="bg-warning/10 p-3 rounded-lg text-warning shrink-0">
              <CreditCard size={28} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Thanh toán thủ công</h3>
              <p className="text-gray-600">Quản lý thanh toán thủ công (chụp ảnh bill, check tài khoản) &rarr; Chậm trễ và dễ nhầm lẫn.</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 3: The Solution */}
      <Slide className="bg-secondary/5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Giải pháp AI4All</h2>
          <p className="text-2xl text-secondary font-serif italic">"Nhân viên xuất sắc 24/7"</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 mb-8">
          <p className="text-xl text-center mb-8 font-medium text-gray-800">Một Chatbot AI hiểu sâu về kinh doanh của bạn như chính bạn.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Database size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Dễ như dùng Word</h3>
              <p className="text-gray-600 text-sm">Chỉ cần tải lên Menu, Bảng giá hoặc file giới thiệu, AI sẽ tự học và trả lời khách.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Zap size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Không bao giờ mệt mỏi</h3>
              <p className="text-gray-600 text-sm">Trả lời ngay lập tức (dưới 3s) bất kể ngày đêm, lễ tết.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                <Bot size={32} />
              </div>
              <h3 className="text-lg font-bold mb-2">Thông minh như người</h3>
              <p className="text-gray-600 text-sm">Không chỉ theo kịch bản, AI hiểu ngôn ngữ tự nhiên và tư vấn như người thật.</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 4.1: Key Features (Part 1) */}
      <Slide>
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold text-primary">Các tính năng "Hái ra tiền"</h2>
          <span className="text-gray-400 font-bold text-xl">1/2</span>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-accent flex gap-6 items-center">
            <div className="bg-accent/10 p-4 rounded-full text-accent shrink-0">
              <CreditCard size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Cổng thanh toán tự động</h3>
              <p className="text-gray-600">Hỗ trợ SePay & nhiều ngân hàng. Khách chuyển khoản hoặc quét QR, AI tự đối soát tài khoản và xác nhận đơn ngay lập tức. Giảm thiểu 99% lỗi do kiểm tra thủ công.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary flex gap-6 items-center">
            <div className="bg-secondary/10 p-4 rounded-full text-secondary shrink-0">
              <MessageSquare size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Hỏi đáp thông minh (RAG)</h3>
              <p className="text-gray-600">AI học sâu mọi chi tiết về dịch vụ (menu, bảng giá, chính sách) từ tài liệu bạn cung cấp. Trả lời chính xác mọi câu hỏi khó.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary flex gap-6 items-center">
            <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
              <Database size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Kết nối dữ liệu Real-time</h3>
              <p className="text-gray-600">Tích hợp trực tiếp với phần mềm quản lý (PMS khách sạn, kho hàng shop) để lấy thông tin tồn kho, phòng trống thời gian thực.</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 4.2: Key Features (Part 2) */}
      <Slide>
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold text-primary">Các tính năng "Hái ra tiền"</h2>
          <span className="text-gray-400 font-bold text-xl">2/2</span>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-secondary flex gap-6 items-center">
            <div className="bg-secondary/10 p-4 rounded-full text-secondary shrink-0">
              <Shield size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Bảo vệ thương hiệu (Guardrails)</h3>
              <p className="text-gray-600">Cam kết AI luôn lịch sự, chuyên nghiệp. Tuyệt đối không nói sai sự thật, không bị "jailbreak" hoặc nhắc đến đối thủ cạnh tranh.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-accent flex gap-6 items-center">
            <div className="bg-accent/10 p-4 rounded-full text-accent shrink-0">
              <Headset size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Live Chat Hand-off</h3>
              <p className="text-gray-600">Tự động nhận diện các tình huống phức tạp hoặc khách hàng đang cáu gắt để báo về điện thoại, chuyển ngay cho người thật hỗ trợ.</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 5: ROI */}
      <Slide className="bg-primary text-white">
        <h2 className="text-4xl font-bold mb-12 text-center">Hiệu quả thực tế (ROI)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-serif text-warning/90 mb-6 flex items-center gap-2">
              <span className="bg-warning text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">X</span> Trước đây
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-warning"><ArrowRight size={18} /></div>
                <span>Chi phí lương: <strong className="text-xl">10-15tr/tháng</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-warning"><ArrowRight size={18} /></div>
                <span>Tỷ lệ bỏ lỡ khách: <strong className="text-xl">30%</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-warning"><ArrowRight size={18} /></div>
                <span>Thời gian phản hồi: <strong>Chậm, phụ thuộc nhân viên</strong></span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl border-2 border-accent relative transform md:scale-105">
            <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-1 rounded-full font-bold shadow-md">
              Đột phá
            </div>
            <h3 className="text-2xl font-serif text-primary mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-secondary" /> Sau khi dùng AI4All
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-secondary"><TrendingUp size={18} /></div>
                <span>Chi phí: <strong className="text-xl text-primary">Chỉ bằng 1/10</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-secondary"><TrendingUp size={18} /></div>
                <span>Phản hồi: <strong className="text-xl text-primary">100% tin nhắn</strong> ngay lập tức</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-secondary"><TrendingUp size={18} /></div>
                <span>Chuyển đổi: <strong className="text-xl text-accent">Tăng lên 40%</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* Slide 6: Integration */}
      <Slide>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Sự đơn giản & Khả năng tích hợp</h2>
          <p className="text-xl text-gray-600">Kết nối dễ dàng - Vận hành chuyên sâu</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch mb-12">
          <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <Smartphone size={40} className="mx-auto mb-4 text-secondary" />
            <h3 className="font-bold mb-2">Kết nối Fanpage</h3>
            <p className="text-sm text-gray-600">Chỉ 1 click để tích hợp vào Messenger/Instagram.</p>
          </div>
          <div className="flex items-center justify-center text-gray-300 hidden md:flex">
            <ArrowRight size={24} />
          </div>
          <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <Database size={40} className="mx-auto mb-4 text-secondary" />
            <h3 className="font-bold mb-2">Tải lên tài liệu</h3>
            <p className="text-sm text-gray-600">AI tự học qua RAG từ PDF, Word, Website.</p>
          </div>
          <div className="flex items-center justify-center text-gray-300 hidden md:flex">
            <ArrowRight size={24} />
          </div>
          <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <Zap size={40} className="mx-auto mb-4 text-secondary" />
            <h3 className="font-bold mb-2">Kết nối API/Webhook</h3>
            <p className="text-sm text-gray-600">Tích hợp hệ thống hiện có (Giá phòng, Tồn kho, Lịch hẹn).</p>
          </div>
        </div>
        
        <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 text-center">
          <p className="text-lg font-medium text-primary">
            <strong className="text-secondary">Không chỉ là một chatbot</strong>, đây là "bộ não" kết nối toàn bộ hoạt động kinh doanh của bạn.
          </p>
        </div>
      </Slide>

      {/* Slide 7: Pricing */}
      <Slide>
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Các gói dịch vụ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">Khởi Nghiệp</h3>
            <p className="text-gray-500 text-sm mb-6">Dành cho Shop nhỏ</p>
            <div className="text-3xl font-bold text-primary mb-6">Miễn phí<span className="text-base font-normal text-gray-500">/dùng thử</span></div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Tính năng AI cơ bản</li>
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Học từ 1 tài liệu</li>
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Hỗ trợ giờ hành chính</li>
            </ul>
            <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/5 transition">Bắt đầu ngay</button>
          </div>
          
          {/* Pro */}
          <div className="bg-primary rounded-2xl shadow-xl border border-primary p-8 flex flex-col transform md:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
              PHỔ BIẾN NHẤT
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Chuyên Nghiệp</h3>
            <p className="text-primary-100 text-sm mb-6 text-gray-300">Dành cho Hotel/Shop lớn</p>
            <div className="text-3xl font-bold text-white mb-6">Liên hệ</div>
            <ul className="space-y-3 mb-8 flex-1 text-white">
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-accent shrink-0" /> Đầy đủ tính năng AI</li>
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-accent shrink-0" /> Tích hợp thanh toán SePay</li>
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-accent shrink-0" /> Ưu tiên xử lý tốc độ cao</li>
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-accent shrink-0" /> Live Chat Hand-off</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-accent text-white font-bold hover:bg-accent/90 transition shadow-lg">Đăng ký ngay</button>
          </div>
          
          {/* Enterprise */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">Chuỗi Cửa Hàng</h3>
            <p className="text-gray-500 text-sm mb-6">Dành cho doanh nghiệp lớn</p>
            <div className="text-3xl font-bold text-primary mb-6">Tùy chỉnh</div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Quản lý tập trung nhiều Fanpage</li>
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Báo cáo phân tích chuyên sâu</li>
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Tích hợp API/ERP riêng</li>
              <li className="flex items-center gap-2 text-sm"><CheckCircle2 size={16} className="text-secondary shrink-0" /> Quản lý tài khoản phụ</li>
            </ul>
            <button className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/5 transition">Nhận tư vấn</button>
          </div>
        </div>
      </Slide>

      {/* Slide 8: Trust & Support */}
      <Slide className="bg-secondary/5">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Cam kết & Đồng hành</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <Lock size={40} />
            </div>
            <h3 className="text-xl font-bold mb-4">Bảo mật tuyệt đối</h3>
            <p className="text-gray-600">Dữ liệu kinh doanh, thông tin khách hàng và kịch bản bán hàng được mã hóa và bảo vệ an toàn 100%.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
            <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
              <Headset size={40} />
            </div>
            <h3 className="text-xl font-bold mb-4">Hỗ trợ 24/7</h3>
            <p className="text-gray-600">Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ bạn xử lý mọi vấn đề kỹ thuật bất kể ngày đêm.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
            <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
              <Zap size={40} />
            </div>
            <h3 className="text-xl font-bold mb-4">Cập nhật liên tục</h3>
            <p className="text-gray-600">Luôn được sử dụng các mô hình AI mới nhất và liên tục mở rộng kênh (Zalo, Web chat, Instagram).</p>
          </div>
        </div>
      </Slide>

      {/* Slide 9: Social Proof */}
      <Slide>
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Câu chuyện thành công</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 bg-primary p-8 text-white flex flex-col justify-center">
            <div className="flex gap-1 mb-4 text-accent">
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
              <Star fill="currentColor" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">Boutique Hotel Đà Lạt</h3>
            <p className="opacity-80 mb-6">Quy mô: 30 phòng</p>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold text-accent">+45%</div>
                <div className="text-sm opacity-90">Tỷ lệ chốt phòng trực tiếp</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">0đ</div>
                <div className="text-sm opacity-90">Chi phí nhân viên trực đêm</div>
              </div>
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
            <div className="text-6xl text-gray-200 absolute top-6 left-6 font-serif">"</div>
            <p className="text-xl md:text-2xl text-gray-700 italic relative z-10 font-serif leading-relaxed mb-6">
              Từ khi dùng AI4All, tôi không còn phải thức đêm check inbox mà doanh số đặt phòng vẫn tăng đều. Khách hàng rất bất ngờ vì được tư vấn chi tiết và nhận mã QR thanh toán ngay lúc 1h sáng.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/avatar1/100/100" alt="Avatar" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="font-bold text-gray-900">Anh Tuấn</div>
                <div className="text-sm text-gray-500">Chủ khách sạn</div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 10: Call to Action */}
      <Slide className="bg-primary text-white text-center">
        <h2 className="text-5xl font-bold mb-6">Hành động ngay!</h2>
        <p className="text-2xl text-accent mb-12 font-serif italic">Tặng ngay 7 ngày dùng thử full tính năng.</p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-2xl text-gray-900 flex flex-col items-center">
            <div className="w-48 h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
              {/* Placeholder for QR Code */}
              <div className="text-center">
                <Smartphone size={48} className="mx-auto text-gray-400 mb-2" />
                <span className="text-sm text-gray-500 font-medium">Mã QR Demo</span>
              </div>
            </div>
            <p className="font-bold text-lg">Quét để Chat thử với Demo Bot</p>
          </div>
          
          <div className="text-left space-y-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold mb-2 text-accent">Liên hệ tư vấn trực tiếp</h3>
              <div className="flex items-center gap-3 text-lg mb-2">
                <Smartphone size={24} /> <span>0909 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <MessageSquare size={24} /> <span>Zalo: AI4All Support</span>
              </div>
            </div>
            <button className="w-full py-4 rounded-xl bg-accent text-white text-xl font-bold hover:bg-accent/90 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer">
              Đăng ký dùng thử <ArrowRight />
            </button>
          </div>
        </div>
      </Slide>
    </div>
  );
}
