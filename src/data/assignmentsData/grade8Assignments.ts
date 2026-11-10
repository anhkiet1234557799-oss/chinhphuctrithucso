import { Assignment } from '../../types';

export const GRADE_8_ASSIGNMENTS: Assignment[] = [
  // ==========================================
  // TIẾNG ANH KHỐI 8 (GLOBAL SUCCESS / CHUẨN GDPT 2018)
  // ==========================================
  {
    id: 'asg-eng8-01',
    title: 'Unit 1: Leisure Time - Verbs of Liking & Compound Sentences',
    subjectId: 'tieng-anh',
    grade: 8,
    chapter: 'Unit 1: Leisure Time',
    description: 'Luyện tập từ vựng hoạt động giải trí, động từ chỉ sở thích đi kèm V-ing / to-V và liên từ kết hợp (FANBOYS).',
    durationMinutes: 45,
    dueDate: '2026-11-26T23:59:00Z',
    maxPoints: 10,
    maxAttempts: 3,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-eng-03',
    teacherName: 'Tổ Tiếng Anh',
    createdAt: '2026-10-25T09:00:00Z',
    questions: [
      {
        id: 'eng8-01-q1',
        type: 'single_choice',
        prompt: 'Choose the best answer: Many teenagers are fond ________ making origami and handcrafted models in their leisure time.',
        options: ['of', 'in', 'at', 'about'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Cấu trúc "to be fond of + V-ing" mang nghĩa là yêu thích điều gì.'
      },
      {
        id: 'eng8-01-q2',
        type: 'multiple_choice',
        prompt: 'Which verbs of liking can be followed by both a gerund (V-ing) and a to-infinitive without much change in meaning? (Select all correct answers)',
        options: ['love', 'like', 'hate', 'enjoy'],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Love, like, hate có thể đi cùng cả V-ing lẫn to-V. Riêng "enjoy" chỉ đi cùng danh động từ V-ing.'
      },
      {
        id: 'eng8-01-q3',
        type: 'true_false',
        prompt: 'In a compound sentence, two independent clauses can be joined by a coordinating conjunction (such as and, but, or, so) preceded by a comma.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng quy tắc cấu trúc câu ghép trong tiếng Anh.'
      },
      {
        id: 'eng8-01-q4',
        type: 'fill_in',
        prompt: 'Fill in the blank with the suitable connector: Minh worked very hard on his science project, ________ (nhưng) he still could not finish it on time.',
        correctAnswer: 'but',
        points: 2,
        explanation: 'Liên từ "but" diễn tả sự tương phản, đối lập.'
      },
      {
        id: 'eng8-01-q5',
        type: 'essay',
        prompt: 'Write a short paragraph (5-7 sentences) discussing the pros and cons of using social media during teenagers\' leisure time.',
        points: 2,
        explanation: 'Gợi ý: Social media connects friends, provides educational videos, and relieves stress. However, excessive use can cause eye strain, sleep deprivation, and lack of real-life interactions. Teens should balance screen time with sports.'
      }
    ]
  },
  {
    id: 'asg-eng8-02',
    title: 'Unit 2: Life in the Countryside - Comparative Adverbs',
    subjectId: 'tieng-anh',
    grade: 8,
    chapter: 'Unit 2: Life in the Countryside',
    description: 'Nắm vững từ vựng đời sống nông thôn và dạng so sánh hơn của trạng từ (comparative forms of adverbs).',
    durationMinutes: 40,
    dueDate: '2026-11-28T23:59:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-eng-03',
    teacherName: 'Tổ Tiếng Anh',
    createdAt: '2026-10-27T10:00:00Z',
    questions: [
      {
        id: 'eng8-02-q1',
        type: 'single_choice',
        prompt: 'Choose the correct comparative adverb: Farmers in my village work ________ than people in big cities.',
        options: ['harder', 'more hard', 'more hardly', 'as hard'],
        correctAnswer: 0,
        points: 2,
        explanation: '"Hard" là trạng từ ngắn đặc biệt, dạng so sánh hơn là "harder" (chăm chỉ hơn).'
      },
      {
        id: 'eng8-02-q2',
        type: 'multiple_choice',
        prompt: 'Which words describe activities or features commonly found in the countryside? (Select all correct answers)',
        options: ['herding cattle', 'harvesting rice', 'skyscrapers and traffic jams', 'flying kites on the dyke'],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Chăn trâu bò, gặt lúa và thả diều trên đê là nét đặc trưng đồng quê. Nhà chọc trời và kẹt xe thuộc về đô thị.'
      },
      {
        id: 'eng8-02-q3',
        type: 'true_false',
        prompt: 'The comparative form of the adverb "carefully" is "carefullier".',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì "carefully" là trạng từ dài có đuôi -ly, dạng so sánh hơn phải là "more carefully".'
      },
      {
        id: 'eng8-02-q4',
        type: 'fill_in',
        prompt: 'Complete the sentence with the comparative form of the adverb "early": My grandmother usually gets up ________ (early) than anyone else in our family.',
        correctAnswer: 'earlier',
        points: 2,
        explanation: 'Early kết thúc bằng -y nên chuyển thành -ier: earlier.'
      },
      {
        id: 'eng8-02-q5',
        type: 'essay',
        prompt: 'Do you prefer living in the countryside or in the city? Write a short reflection (4-6 sentences) giving two reasons for your choice.',
        points: 2,
        explanation: 'Học sinh nêu rõ lựa chọn (thích nông thôn hay thành phố) kèm 2 lý do thuyết phục (không khí trong lành, thực phẩm tươi, nhịp sống yên bình hoặc tiện ích hiện đại, trường học, khu vui chơi).'
      }
    ]
  },

  // ==========================================
  // TOÁN HỌC KHỐI 8
  // ==========================================
  {
    id: 'asg-toan8-01',
    title: 'Đại số 8: Hằng đẳng thức đáng nhớ & Phân tích đa thức',
    subjectId: 'toan',
    grade: 8,
    chapter: 'Chương 1: Đa thức & Hằng đẳng thức',
    description: '7 hằng đẳng thức đáng nhớ, phương pháp đặt nhân tử chung, dùng hằng đẳng thức và nhóm hạng tử.',
    durationMinutes: 45,
    dueDate: '2026-11-26T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-toan-03',
    teacherName: 'Tổ Toán - Tin học',
    createdAt: '2026-10-26T15:00:00Z',
    questions: [
      {
        id: 'toan8-01-q1',
        type: 'single_choice',
        prompt: 'Khai triển hằng đẳng thức (x - 2y)^2 ta được kết quả là:',
        options: ['x^2 - 4xy + 4y^2', 'x^2 - 2xy + 4y^2', 'x^2 - 4y^2', 'x^2 + 4xy + 4y^2'],
        correctAnswer: 0,
        points: 2,
        explanation: '(a - b)^2 = a^2 - 2ab + b^2 => (x - 2y)^2 = x^2 - 2*x*(2y) + (2y)^2 = x^2 - 4xy + 4y^2.'
      },
      {
        id: 'toan8-01-q2',
        type: 'multiple_choice',
        prompt: 'Đa thức x^2 - 9 có thể được phân tích thành nhân tử bằng những cách nào sau đây? (Chọn các phương án đúng)',
        options: ['(x - 3)(x + 3)', '(x + 3)(x - 3)', '(x - 9)(x + 1)', '(x - 3)^2'],
        correctAnswer: [0, 1],
        points: 2,
        explanation: 'Áp dụng hằng đẳng thức hiệu hai bình phương a^2 - b^2 = (a - b)(a + b) => x^2 - 9 = (x - 3)(x + 3).'
      },
      {
        id: 'toan8-01-q3',
        type: 'true_false',
        prompt: 'Biểu thức A = x^2 - 6x + 10 luôn có giá trị dương với mọi số thực x.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng vì A = (x^2 - 6x + 9) + 1 = (x - 3)^2 + 1 >= 1 > 0 với mọi x.'
      },
      {
        id: 'toan8-01-q4',
        type: 'fill_in',
        prompt: 'Tính nhanh giá trị của biểu thức 101^2 - 1. Nhập kết quả số:',
        correctAnswer: '10200',
        points: 2,
        explanation: '101^2 - 1^2 = (101 - 1)(101 + 1) = 100 * 102 = 10200.'
      },
      {
        id: 'toan8-01-q5',
        type: 'essay',
        prompt: 'Phân tích đa thức sau thành nhân tử: B = x^3 - 4x^2 + 4x. Trình bày rõ phương pháp áp dụng.',
        points: 2,
        explanation: 'Bước 1: Đặt nhân tử chung x ra ngoài: B = x(x^2 - 4x + 4). Bước 2: Nhận ra hằng đẳng thức bình phương của một hiệu: x^2 - 4x + 4 = (x - 2)^2. Vậy B = x(x - 2)^2.'
      }
    ]
  },
  {
    id: 'asg-toan8-02',
    title: 'Hình học 8: Hình chóp tam giác đều & Hình chóp tứ giác đều',
    subjectId: 'toan',
    grade: 8,
    chapter: 'Chương 3: Hình khối trong thực tiễn',
    description: 'Nhận biết các yếu tố đáy, đỉnh, mặt bên; công thức tính diện tích xung quanh và thể tích hình chóp đều.',
    durationMinutes: 45,
    dueDate: '2026-11-29T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-toan-03',
    teacherName: 'Tổ Toán - Tin học',
    createdAt: '2026-10-27T15:30:00Z',
    questions: [
      {
        id: 'toan8-02-q1',
        type: 'single_choice',
        prompt: 'Các mặt bên của hình chóp tam giác đều là những hình gì?',
        options: ['Các tam giác cân bằng nhau', 'Các hình vuông', 'Các tam giác vuông', 'Các hình thang cân'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Hình chóp tam giác đều có các mặt bên là các tam giác cân có chung đỉnh và bằng nhau.'
      },
      {
        id: 'toan8-02-q2',
        type: 'multiple_choice',
        prompt: 'Một hình chóp tứ giác đều có những đặc điểm nào sau đây? (Chọn các phương án đúng)',
        options: [
          'Đáy là một hình vuông',
          'Có tất cả 4 mặt bên là các tam giác cân bằng nhau',
          'Có tất cả 8 cạnh (4 cạnh đáy và 4 cạnh bên)',
          'Đáy là một hình tam giác đều'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Hình chóp tứ giác đều có đáy hình vuông, 4 mặt bên tam giác cân, 5 đỉnh, 8 cạnh.'
      },
      {
        id: 'toan8-02-q3',
        type: 'true_false',
        prompt: 'Thể tích của hình chóp được tính bằng 1/3 tích của diện tích đáy và chiều cao: V = (1/3) * S_đáy * h.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo công thức hình học chuẩn.'
      },
      {
        id: 'toan8-02-q4',
        type: 'fill_in',
        prompt: 'Một hình chóp tứ giác đều có diện tích đáy bằng 30 cm² và chiều cao bằng 9 cm. Thể tích của hình chóp đó là bao nhiêu cm³? (Chỉ nhập số)',
        correctAnswer: '90',
        points: 2,
        explanation: 'V = (1/3) * 30 * 9 = 90 cm³.'
      },
      {
        id: 'toan8-02-q5',
        type: 'essay',
        prompt: 'Kim tự tháp bảo tàng Louvre tại Paris là một hình chóp tứ giác đều có chiều cao khoảng 21 m và cạnh đáy dài khoảng 34 m. Hãy tính thể tích không gian bên trong của kim tự tháp này.',
        points: 2,
        explanation: 'Diện tích đáy S = 34 * 34 = 1156 m². Thể tích V = (1/3) * 1156 * 21 = 1156 * 7 = 8092 m³.'
      }
    ]
  },

  // ==========================================
  // NGỮ VĂN KHỐI 8
  // ==========================================
  {
    id: 'asg-van8-01',
    title: 'Đọc hiểu Ngữ văn 8: Tác phẩm truyện ngắn hiện thực (Lão Hạc)',
    subjectId: 'van',
    grade: 8,
    chapter: 'Bài 1: Gương mặt thân yêu của cuộc đời',
    description: 'Phân tích nhân vật Lão Hạc của Nam Cao: Số phận bi kịch, nhân phẩm cao đẹp và tấm lòng nhân đạo sâu sắc.',
    durationMinutes: 45,
    dueDate: '2026-11-27T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-van-03',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-26T11:30:00Z',
    questions: [
      {
        id: 'van8-01-q1',
        type: 'single_choice',
        prompt: 'Nguyên nhân trực tiếp khiến lão Hạc quyết định bán cậu Vàng là gì?',
        options: [
          'Lão ốm một trận thập tử nhất sinh, kiệt quệ tài chính và không muốn tiêu lẹm vào mảnh vườn của con trai',
          'Lão ghét chó và không muốn nuôi nữa',
          'Có người làng trả giá thật cao để mua chó',
          'Con trai lão viết thư bảo bán chó đi'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Cảnh ngộ túng quẫn sau cơn bạo bệnh cùng tình thương con sâu nặng khiến lão đành gạt nước mắt bán đi người bạn thân thiết.'
      },
      {
        id: 'van8-01-q2',
        type: 'multiple_choice',
        prompt: 'Những phẩm chất cao quý nào tỏa sáng ở nhân vật lão Hạc trong truyện ngắn Nam Cao? (Chọn các phương án đúng)',
        options: [
          'Tình phụ tử bao la, hy sinh tất cả vì tương lai của con',
          'Lòng tự trọng cao thượng, thà chết chứ không làm điều tha hóa bất lương',
          'Tấm lòng nhân hậu, luôn day dứt ân hận vì trót lừa một con chó',
          'Tính cách ích kỷ, tham lam tiền bạc của người khác'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Lão Hạc là biểu tượng sáng ngời cho nhân cách cao đẹp và tình cha con thiêng liêng của người nông dân Việt Nam trước 1945.'
      },
      {
        id: 'van8-01-q3',
        type: 'true_false',
        prompt: 'Cái chết dữ dội và đau đớn bằng bả chó của lão Hạc là một sự giải thoát bi thảm nhưng khẳng định phẩm giá trong sạch đến phút cuối đời.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Cái chết bảo vệ mảnh vườn cho con và giữ gìn nhân phẩm thanh sạch không bị cái đói tha hóa.'
      },
      {
        id: 'van8-01-q4',
        type: 'fill_in',
        prompt: 'Nhân vật người kể chuyện xưng "tôi", là chỗ dựa tinh thần và người thấu hiểu sâu sắc bi kịch của lão Hạc là ông ___________.',
        correctAnswer: 'giáo',
        points: 2,
        explanation: 'Ông giáo là nhân vật mang điểm nhìn tri thức đầy đồng cảm và nhân đạo của chính tác giả Nam Cao.'
      },
      {
        id: 'van8-01-q5',
        type: 'essay',
        prompt: 'Hãy phân tích ngắn gọn ý nghĩa câu nói của ông giáo: "Chao ôi! Đối với những người ở quanh ta, nếu ta không cố tìm mà hiểu họ, thì ta chỉ thấy họ gàn dở, ngu ngốc, bần tiện, xấu xa, bỉ ổi... toàn những cớ để cho ta tàn nhẫn".',
        points: 2,
        explanation: 'Ý nghĩa: Đây là triết lý nhân sinh sâu sắc của Nam Cao. Con người cần nhìn nhận người khác bằng đôi mắt của tình thương và sự thấu cảm, tránh cái nhìn định kiến thờ ơ để nhận ra những hạt ngọc lấp lánh trong tâm hồn người nghèo khổ.'
      }
    ]
  },
  {
    id: 'asg-van8-02',
    title: 'Thực hành Tiếng Việt 8: Đoạn văn Diễn dịch, Quy nạp & Song hành',
    subjectId: 'van',
    grade: 8,
    chapter: 'Thực hành Tiếng Việt: Cấu trúc đoạn văn',
    description: 'Nhận biết vị trí câu chủ đề (topic sentence), phân biệt cấu trúc đoạn văn diễn dịch, quy nạp, song hành và móc xích.',
    durationMinutes: 40,
    dueDate: '2026-11-30T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-van-03',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-28T10:30:00Z',
    questions: [
      {
        id: 'van8-02-q1',
        type: 'single_choice',
        prompt: 'Đoạn văn có câu chủ đề nằm ở vị trí đầu đoạn, các câu tiếp theo triển khai giải thích, chứng minh cho câu chủ đề đó được gọi là:',
        options: ['Đoạn văn diễn dịch', 'Đoạn văn quy nạp', 'Đoạn văn song hành', 'Đoạn văn móc xích'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Đoạn văn diễn dịch: Ý tổng quát nằm ở câu đầu tiên, các câu sau phát triển chi tiết.'
      },
      {
        id: 'van8-02-q2',
        type: 'multiple_choice',
        prompt: 'Đoạn văn quy nạp có những đặc trưng cấu trúc nào sau đây? (Chọn các phương án đúng)',
        options: [
          'Các câu đầu trình bày các ý nhỏ, dẫn chứng hoặc luận cứ cụ thể',
          'Câu chủ đề mang ý kết luận, tổng quát nằm ở cuối đoạn văn',
          'Không có câu chủ đề nào trong toàn đoạn',
          'Có tác dụng tổng hợp và nâng cao cảm xúc ở phần kết đoạn'
        ],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Đoạn quy nạp đi từ các ý cụ thể đến kết luận tổng quát ở câu cuối cùng.'
      },
      {
        id: 'van8-02-q3',
        type: 'true_false',
        prompt: 'Trong đoạn văn song hành, tất cả các câu đều bình đẳng về mặt ngữ pháp và nội dung, cùng hướng về một chủ đề chung mà không có câu chủ đề riêng biệt.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo định nghĩa cấu trúc đoạn văn song hành.'
      },
      {
        id: 'van8-02-q4',
        type: 'fill_in',
        prompt: 'Đoạn văn kết hợp cả hai mô hình (câu mở đầu nêu luận điểm, các câu giữa triển khai, và câu cuối tổng kết, khẳng định lại) được gọi là đoạn văn tổng - phân - ___________.',
        correctAnswer: 'hợp',
        points: 2,
        explanation: 'Mô hình Tổng - Phân - Hợp (Tổng hợp - Phân tích - Hợp nhất).'
      },
      {
        id: 'van8-02-q5',
        type: 'essay',
        prompt: 'Hãy tự viết một đoạn văn (từ 5 đến 7 câu) theo cấu trúc DIỄN DỊCH với câu chủ đề: "Đọc sách là thói quen vô cùng bổ ích đối với mỗi học sinh chúng ta."',
        points: 2,
        explanation: 'Đoạn văn mẫu: "Đọc sách là thói quen vô cùng bổ ích đối với mỗi học sinh chúng ta. Trước hết, sách cung cấp một kho tàng tri thức vô tận về khoa học, lịch sử và đời sống. Bên cạnh đó, việc đọc còn giúp chúng ta rèn luyện khả năng tập trung và mở rộng vốn từ ngữ. Không những thế, những trang sách văn học chân chính còn nuôi dưỡng tâm hồn, dạy ta biết yêu thương và sống nhân ái. Vì vậy, mỗi ngày chúng ta nên dành ít nhất ba mươi phút để đọc sách."'
      }
    ]
  },

  // ==========================================
  // KHOA HỌC TỰ NHIÊN KHỐI 8
  // ==========================================
  {
    id: 'asg-khtn8-01',
    title: 'KHTN 8: Phản ứng hóa học & Định luật bảo toàn khối lượng',
    subjectId: 'khtn',
    grade: 8,
    chapter: 'Chương 1: Phản ứng hóa học',
    description: 'Dấu hiệu nhận biết phản ứng, phương trình hóa học, định luật bảo toàn khối lượng và tính theo phương trình hóa học.',
    durationMinutes: 45,
    dueDate: '2026-11-27T21:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-khtn-03',
    teacherName: 'Tổ KHTN',
    createdAt: '2026-10-26T16:30:00Z',
    questions: [
      {
        id: 'khtn8-01-q1',
        type: 'single_choice',
        prompt: 'Trong một phản ứng hóa học, đại lượng nào sau đây luôn được bảo toàn (không thay đổi trước và sau phản ứng)?',
        options: ['Tổng khối lượng của các chất', 'Số lượng phân tử', 'Hình dạng chất', 'Thể tích của các chất khí'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Theo Định luật bảo toàn khối lượng (Lomonosov - Lavoisier): Tổng khối lượng các chất sản phẩm bằng tổng khối lượng các chất tham gia phản ứng.'
      },
      {
        id: 'khtn8-01-q2',
        type: 'multiple_choice',
        prompt: 'Những hiện tượng nào sau đây là dấu hiệu chứng tỏ có phản ứng hóa học xảy ra? (Chọn các phương án đúng)',
        options: [
          'Có chất khí mới sinh ra (sủi bọt khí)',
          'Có chất kết tủa không tan xuất hiện',
          'Có sự thay đổi màu sắc hoặc phát sáng, tỏa nhiệt',
          'Nước đá tan chảy thành nước lỏng ở nhiệt độ phòng'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Nước đá tan chảy là hiện tượng vật lý (biến đổi trạng thái), không phải phản ứng hóa học.'
      },
      {
        id: 'khtn8-01-q3',
        type: 'true_false',
        prompt: 'Trong phản ứng nung đá vôi (CaCO3 -> CaO + CO2), khối lượng chất rắn thu được giảm đi là do khí cacbonic CO2 đã bay vào không khí.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Khối lượng chất rắn giảm đi đúng bằng khối lượng khí CO2 thoát ra, định luật bảo toàn khối lượng vẫn hoàn toàn nghiệm đúng.'
      },
      {
        id: 'khtn8-01-q4',
        type: 'fill_in',
        prompt: 'Cho 5,6 gam sắt (Fe) tác dụng vừa đủ với dung dịch axit clohiđric (HCl), sinh ra 12,7 gam muối FeCl2 và 0,2 gam khí hiđro (H2). Khối lượng axit HCl đã tham gia phản ứng là bao nhiêu gam? (Chỉ nhập số)',
        correctAnswer: '7.3',
        points: 2,
        explanation: 'm_Fe + m_HCl = m_FeCl2 + m_H2 => m_HCl = 12,7 + 0,2 - 5,6 = 7,3 gam.'
      },
      {
        id: 'khtn8-01-q5',
        type: 'essay',
        prompt: 'Cân bằng phương trình hóa học sau và nêu tỉ lệ số phân tử giữa các chất: Al + O2 ---> Al2O3.',
        points: 2,
        explanation: 'Phương trình hóa học cân bằng: 4Al + 3O2 -> 2Al2O3. Tỉ lệ: Cứ 4 nguyên tử Al tác dụng với 3 phân tử O2 tạo thành 2 phân tử Al2O3 (tỉ lệ 4 : 3 : 2).'
      }
    ]
  },
  {
    id: 'asg-khtn8-02',
    title: 'KHTN 8: Khối lượng riêng và Áp suất trong đời sống',
    subjectId: 'khtn',
    grade: 8,
    chapter: 'Chương 3: Khối lượng riêng & Áp suất',
    description: 'Công thức tính khối lượng riêng D = m / V, áp suất chất rắn p = F / S, áp suất chất lỏng và áp suất khí quyển.',
    durationMinutes: 40,
    dueDate: '2026-11-28T21:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-khtn-03',
    teacherName: 'Tổ KHTN',
    createdAt: '2026-10-27T17:00:00Z',
    questions: [
      {
        id: 'khtn8-02-q1',
        type: 'single_choice',
        prompt: 'Đơn vị chuẩn đo áp suất trong hệ đo lường quốc tế (SI) là gì?',
        options: ['Pascan (Pa hoặc N/m²)', 'Niu-tơn (N)', 'Jun (J)', 'Oát (W)'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Đơn vị của áp suất là Pascal (Pa), 1 Pa = 1 N/m².'
      },
      {
        id: 'khtn8-02-q2',
        type: 'multiple_choice',
        prompt: 'Để làm tăng áp suất tác dụng lên mặt tiếp xúc, ta có thể áp dụng những cách nào sau đây? (Chọn các phương án đúng)',
        options: [
          'Tăng áp lực tác dụng F',
          'Giảm diện tích mặt bị ép S (mài sắc lưỡi dao, làm nhọn đầu đinh)',
          'Tăng diện tích mặt bị ép S',
          'Vừa tăng áp lực F vừa giảm diện tích S'
        ],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Công thức p = F / S, áp suất tỉ lệ thuận với F và tỉ lệ nghịch với S.'
      },
      {
        id: 'khtn8-02-q3',
        type: 'true_false',
        prompt: 'Chất lỏng gây ra áp suất theo mọi phương lên đáy bình, thành bình và các vật nằm trong lòng chất lỏng.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo đặc điểm áp suất chất lỏng.'
      },
      {
        id: 'khtn8-02-q4',
        type: 'fill_in',
        prompt: 'Một khối sắt có thể tích 0,002 m³ và khối lượng 15,6 kg. Khối lượng riêng của sắt là bao nhiêu kg/m³? (Chỉ nhập số)',
        correctAnswer: '7800',
        points: 2,
        explanation: 'D = m / V = 15,6 / 0,002 = 7800 kg/m³.'
      },
      {
        id: 'khtn8-02-q5',
        type: 'essay',
        prompt: 'Tại sao mũi của cây đinh hoặc lưỡi kéo, lưỡi dao cắt gọt lại luôn được chế tạo rất nhọn và mỏng sắc bén?',
        points: 2,
        explanation: 'Theo công thức p = F / S, khi diện tích tiếp xúc S rất nhỏ thì với một lực tác dụng F vừa phải cũng có thể tạo ra áp suất p rất lớn, giúp đinh dễ dàng đóng ngập vào gỗ hoặc dao dễ dàng cắt đứt đồ vật.'
      }
    ]
  },

  // ==========================================
  // LỊCH SỬ VÀ ĐỊA LÍ KHỐI 8
  // ==========================================
  {
    id: 'asg-lsdl8-01',
    title: 'Lịch sử 8: Các cuộc Cách mạng tư sản thời cận đại',
    subjectId: 'lich-su-dia-ly',
    grade: 8,
    chapter: 'Lịch sử - Chương 1: Thời kỳ xác lập CNTB',
    description: 'Cách mạng tư sản Anh, Chiến tranh giành độc lập 13 thuộc địa Anh ở Bắc Mỹ và Đại cách mạng Pháp 1789.',
    durationMinutes: 45,
    dueDate: '2026-11-28T20:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-lsdl-03',
    teacherName: 'Tổ Sử - Địa',
    createdAt: '2026-10-26T09:30:00Z',
    questions: [
      {
        id: 'lsdl8-01-q1',
        type: 'single_choice',
        prompt: 'Sự kiện mở đầu cho cuộc Đại cách mạng tư sản Pháp năm 1789 là cuộc tấn công đánh chiếm địa điểm nào?',
        options: ['Pháo đài - nhà tù Ba-xti (Bastille)', 'Cung điện Véc-xai', 'Quảng trường Công hòa', 'Toà nhà Quốc hội'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Ngày 14/7/1789, quần chúng nhân dân Pa-ri đánh chiếm pháo đài Ba-xti - biểu tượng quyền lực của chế độ phong kiến chuyên chế.'
      },
      {
        id: 'lsdl8-01-q2',
        type: 'multiple_choice',
        prompt: 'Tuyên ngôn Độc lập năm 1776 của Hợp chủng quốc Hoa Kỳ chứa đựng những quyền con người bất khả xâm phạm nào? (Chọn các phương án đúng)',
        options: [
          'Quyền được sống',
          'Quyền tự do',
          'Quyền mưu cầu hạnh phúc',
          'Quyền phong kiến chiếm đoạt ruộng đất nông dân'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Tuyên ngôn do Thomas Jefferson soạn thảo khẳng định các quyền tự nhiên thiêng liêng: Sống, Tự do và Mưu cầu hạnh phúc.'
      },
      {
        id: 'lsdl8-01-q3',
        type: 'true_false',
        prompt: 'Cách mạng tư sản Anh thế kỉ XVII đã thiết lập chế độ quân chủ lập hiến, mở đường cho chủ nghĩa tư bản phát triển.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Cách mạng tư sản Anh xác lập thể chế quân chủ lập hiến, quyền lực thực tế thuộc về Nghị viện.'
      },
      {
        id: 'lsdl8-01-q4',
        type: 'fill_in',
        prompt: 'Khẩu hiệu nổi tiếng của Cách mạng Pháp 1789 là: "Tự do - Bình đẳng - ___________".',
        correctAnswer: 'Bác ái',
        points: 2,
        explanation: 'Khẩu hiệu kinh điển: "Liberté, Égalité, Fraternité" (Tự do - Bình đẳng - Bác ái).'
      },
      {
        id: 'lsdl8-01-q5',
        type: 'essay',
        prompt: 'Vì sao nói cuộc Đại cách mạng tư sản Pháp năm 1789 là cuộc cách mạng tư sản triệt để nhất thời kỳ cận đại?',
        points: 2,
        explanation: 'Triệt để nhất vì: 1. Đã lật đổ hoàn toàn chế độ phong kiến chuyên chế và xử chém vua Lu-i XVI; 2. Giải quyết triệt để vấn đề ruộng đất cho giai cấp nông dân; 3. Đưa giai cấp tư sản lên nắm quyền, mở đường rộng lớn cho CNTB phát triển; 4. Ảnh hưởng sâu rộng làm rung chuyển toàn bộ châu Âu phong kiến.'
      }
    ]
  },
  {
    id: 'asg-lsdl8-02',
    title: 'Địa lí 8: Đặc điểm địa hình và khoáng sản Việt Nam',
    subjectId: 'lich-su-dia-ly',
    grade: 8,
    chapter: 'Địa lí - Chương 1: Địa hình và khoáng sản Việt Nam',
    description: 'Đặc điểm chung của địa hình Việt Nam (đồi núi chiếm 3/4 diện tích, hướng tây bắc - đông nam và cánh cung) và tiềm năng khoáng sản.',
    durationMinutes: 40,
    dueDate: '2026-11-29T20:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-lsdl-03',
    teacherName: 'Tổ Sử - Địa',
    createdAt: '2026-10-27T09:30:00Z',
    questions: [
      {
        id: 'lsdl8-02-q1',
        type: 'single_choice',
        prompt: 'Địa hình đồi núi chiếm bao nhiêu phần diện tích lãnh thổ đất liền của nước ta?',
        options: ['3/4 diện tích', '1/4 diện tích', '1/2 diện tích', '2/3 diện tích'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Đồi núi chiếm 3/4 diện tích đất liền, nhưng chủ yếu là đồi núi thấp dưới 1.000 mét (chiếm tới 85%).'
      },
      {
        id: 'lsdl8-02-q2',
        type: 'multiple_choice',
        prompt: 'Hai hướng chính của các dãy núi ở nước ta là gì? (Chọn 2 phương án đúng)',
        options: ['Hướng tây bắc - đông nam', 'Hướng cánh cung', 'Hướng bắc - nam', 'Hướng đông - tây'],
        correctAnswer: [0, 1],
        points: 2,
        explanation: 'Hai hướng chính là hướng tây bắc - đông nam (dãy Hoàng Liên Sơn, Trường Sơn Bắc) và hướng cánh cung (vùng núi Đông Bắc).'
      },
      {
        id: 'lsdl8-02-q3',
        type: 'true_false',
        prompt: 'Bể than đá lớn nhất và có trữ lượng chất lượng cao nhất ở nước ta tập trung tại tỉnh Quảng Ninh.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Vùng than antraxit Quảng Ninh chiếm phần lớn sản lượng than cả nước.'
      },
      {
        id: 'lsdl8-02-q4',
        type: 'fill_in',
        prompt: 'Bauxit (quặng nhôm) của nước ta tập trung nhiều nhất ở vùng cao nguyên nào? (Nhập tên vùng)',
        correctAnswer: 'Tây Nguyên',
        points: 2,
        explanation: 'Tây Nguyên có trữ lượng bauxit hàng tỉ tấn trên các cao nguyên đất đỏ bazan.'
      },
      {
        id: 'lsdl8-02-q5',
        type: 'essay',
        prompt: 'Nêu những thuận lợi và khó khăn của địa hình đồi núi đối với sự phát triển kinh tế - xã hội ở Việt Nam.',
        points: 2,
        explanation: 'Thuận lợi: Tiềm năng thủy điện dồi dào; giàu khoáng sản; đất feralit thích hợp trồng cây công nghiệp lâu năm, cây dược liệu và chăn nuôi gia súc lớn; cảnh quan du lịch sinh thái độc đáo. Khó khăn: Địa hình chia cắt hiểm trở gây trở ngại cho giao thông; nguy cơ thiên tai xói mòn, lũ quét, sạt lở đất trong mùa mưa bão.'
      }
    ]
  },

  // ==========================================
  // TIN HỌC KHỐI 8
  // ==========================================
  {
    id: 'asg-tin8-01',
    title: 'Tin học 8: Thuật toán và Lập trình trực quan Scratch/Python',
    subjectId: 'tin-hoc',
    grade: 8,
    chapter: 'Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính',
    description: 'Cấu trúc tuần tự, rẽ nhánh (if-else), lặp (for/while) và biến số trong việc mô tả thuật toán.',
    durationMinutes: 45,
    dueDate: '2026-11-26T22:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-tin-02',
    teacherName: 'Tổ Tin học',
    createdAt: '2026-10-26T13:30:00Z',
    questions: [
      {
        id: 'tin8-01-q1',
        type: 'single_choice',
        prompt: 'Cấu trúc điều khiển nào được dùng khi cần thực hiện một khối lệnh lặp đi lặp lại nhiều lần?',
        options: ['Cấu trúc lặp', 'Cấu trúc rẽ nhánh', 'Cấu trúc tuần tự', 'Cấu trúc gán biến'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Cấu trúc lặp (vòng lặp) cho phép thực thi lặp lại một chuỗi lệnh theo điều kiện hoặc số lần xác định.'
      },
      {
        id: 'tin8-01-q2',
        type: 'multiple_choice',
        prompt: 'Những tên biến nào sau đây là hợp lệ trong ngôn ngữ lập trình Python? (Chọn các phương án đúng)',
        options: ['tong_diem', '_diemToan', 'diem1', '2diem'],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Tên biến không được bắt đầu bằng chữ số (2diem là không hợp lệ).'
      },
      {
        id: 'tin8-01-q3',
        type: 'true_false',
        prompt: 'Trong ngôn ngữ Scratch, khối lệnh "repeat until <điều kiện>" sẽ tiếp tục lặp lại cho đến khi điều kiện đó trở thành Đúng (True).',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo nguyên lý hoạt động của khối lệnh repeat until trong Scratch.'
      },
      {
        id: 'tin8-01-q4',
        type: 'fill_in',
        prompt: 'Trong Python, kết quả in ra màn hình của đoạn mã sau: print(15 // 4) là bao nhiêu? (Chỉ nhập số nguyên)',
        correctAnswer: '3',
        points: 2,
        explanation: 'Phép toán // là phép chia lấy phần nguyên: 15 chia 4 được 3 dư 3.'
      },
      {
        id: 'tin8-01-q5',
        type: 'practice',
        prompt: 'Viết thuật toán (bằng sơ đồ khối hoặc liệt kê các bước bằng mã giả) tính tổng các số tự nhiên từ 1 đến N (với N nhập từ bàn phím).',
        points: 2,
        explanation: 'Các bước: 1. Nhập số nguyên dương N; 2. Khởi tạo S = 0, i = 1; 3. Nếu i <= N thì S = S + i, i = i + 1 và quay lại bước 3; 4. Nếu i > N thì in kết quả S ra màn hình và kết thúc.'
      }
    ]
  },
  {
    id: 'asg-tin8-02',
    title: 'Tin học 8: Đa phương tiện và An toàn thông tin số',
    subjectId: 'tin-hoc',
    grade: 8,
    chapter: 'Chủ đề 2 & 4: Ứng dụng tin học & Đạo đức số',
    description: 'Thiết kế bài thuyết trình đa phương tiện, hiệu ứng chuyển trang, luật bản quyền và ứng xử văn minh trên không gian mạng.',
    durationMinutes: 40,
    dueDate: '2026-11-29T22:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-tin-02',
    teacherName: 'Tổ Tin học',
    createdAt: '2026-10-28T13:30:00Z',
    questions: [
      {
        id: 'tin8-02-q1',
        type: 'single_choice',
        prompt: 'Hành vi nào dưới đây vi phạm nghiêm trọng Luật An ninh mạng và đạo đức số?',
        options: [
          'Tự ý đăng tải hình ảnh riêng tư và bôi nhọ danh dự của bạn bè trên mạng xã hội',
          'Sử dụng hình ảnh có ghi rõ nguồn tác giả và xin phép',
          'Tạo mật khẩu mạnh và không chia sẻ cho người khác',
          'Tham gia các diễn đàn học tập trực tuyến nghiêm túc'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Xúc phạm danh dự, phát tán hình ảnh riêng tư không được phép là hành vi vi phạm pháp luật.'
      },
      {
        id: 'tin8-02-q2',
        type: 'multiple_choice',
        prompt: 'Một sản phẩm đa phương tiện (Multimedia) có thể kết hợp những dạng thông tin nào sau đây? (Chọn các phương án đúng)',
        options: ['Văn bản (Text)', 'Hình ảnh tĩnh và đồ họa', 'Âm thanh (Audio)', 'Video và hoạt hình (Animation)'],
        correctAnswer: [0, 1, 2, 3],
        points: 2,
        explanation: 'Đa phương tiện kết hợp đầy đủ cả 4 dạng: văn bản, âm thanh, hình ảnh và video.'
      },
      {
        id: 'tin8-02-q3',
        type: 'true_false',
        prompt: 'Giấy phép Creative Commons (CC) cho phép người sáng tạo chia sẻ tác phẩm của họ cho cộng đồng sử dụng miễn phí theo một số điều kiện quy định.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo quy chuẩn bản quyền nội dung số quốc tế.'
      },
      {
        id: 'tin8-02-q4',
        type: 'fill_in',
        prompt: 'Phần mềm độc hại tự động lây nhiễm, phá hủy dữ liệu hoặc đánh cắp thông tin cá nhân trên máy tính gọi chung là vi-rút máy tính hoặc mã ___________.',
        correctAnswer: 'độc',
        points: 2,
        explanation: 'Mã độc (malware / computer virus).'
      },
      {
        id: 'tin8-02-q5',
        type: 'essay',
        prompt: 'Em hãy nêu 3 quy tắc quan trọng để thiết kế một bài thuyết trình trình chiếu (PowerPoint/Canva) đẹp mắt, dễ theo dõi và không gây mỏi mắt cho người xem.',
        points: 2,
        explanation: '3 quy tắc: 1. Nguyên tắc 6x6 (không quá 6 dòng chữ trên 1 slide, mỗi dòng không quá 6 từ); 2. Phối màu tương phản cao (chữ tối trên nền sáng hoặc chữ sáng trên nền tối); 3. Sử dụng hình ảnh minh họa chất lượng cao có chọn lọc, hạn chế hiệu ứng chuyển động rườm rà.'
      }
    ]
  },

  // ==========================================
  // GIÁO DỤC CÔNG DÂN KHỐI 8
  // ==========================================
  {
    id: 'asg-gdcd8-01',
    title: 'GDCD 8: Tự hào truyền thống dân tộc & Phòng chống bạo lực học đường',
    subjectId: 'gdcd',
    grade: 8,
    chapter: 'Chủ đề 1 & 2: Bản sắc dân tộc & Kỹ năng ứng phó bạo lực',
    description: 'Nhận diện các hình thức bạo lực học đường (thể xác, tinh thần, trên mạng) và kỹ năng phòng ngừa, giải quyết.',
    durationMinutes: 40,
    dueDate: '2026-11-28T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdcd-03',
    teacherName: 'Tổ GDCD',
    createdAt: '2026-10-27T10:00:00Z',
    questions: [
      {
        id: 'gdcd8-01-q1',
        type: 'single_choice',
        prompt: 'Hành vi nào dưới đây là biểu hiện của bạo lực tinh thần trong học đường?',
        options: [
          'Cô lập, tẩy chay, đặt biệt danh xúc phạm và thêu dệt chuyện xấu về bạn bè',
          'Đánh nhau gây thương tích ngoài cổng trường',
          'Ủng hộ sách vở cho bạn học sinh vùng cao',
          'Giúp bạn giảng lại bài toán khó'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Tẩy chay, cô lập, bêu xấu là các hành vi bạo lực tinh thần gây tổn thương tâm lý nghiêm trọng.'
      },
      {
        id: 'gdcd8-01-q2',
        type: 'multiple_choice',
        prompt: 'Khi bản thân hoặc bạn bè bị đe dọa bạo lực học đường, em nên làm những việc gì? (Chọn các phương án đúng)',
        options: [
          'Báo ngay cho giáo viên chủ nhiệm, giám thị hoặc ban giám hiệu nhà trường',
          'Tâm sự và tìm kiếm sự hỗ trợ kịp thời từ cha mẹ',
          'Âm thầm chịu đựng hoặc rủ bạn bè mang vũ khí đi đánh trả để trả thù',
          'Gọi điện tới tổng đài quốc gia bảo vệ trẻ em 111 khi cần thiết'
        ],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Tuyệt đối không âm thầm chịu đựng hay dùng bạo lực trả đũa vì sẽ làm tình hình tồi tệ hơn.'
      },
      {
        id: 'gdcd8-01-q3',
        type: 'true_false',
        prompt: 'Tự hào về truyền thống dân tộc là thể hiện lòng tự tôn, biết ơn thế hệ đi trước và có ý thức rèn luyện để xây dựng đất nước văn minh giàu mạnh.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo nội dung bài học về lòng tự hào dân tộc.'
      },
      {
        id: 'gdcd8-01-q4',
        type: 'fill_in',
        prompt: 'Tổng đài quốc gia bảo vệ trẻ em tại Việt Nam có số điện thoại miễn phí gồm 3 chữ số là ___________.',
        correctAnswer: '111',
        points: 2,
        explanation: 'Tổng đài 111 hỗ trợ bảo vệ trẻ em 24/7.'
      },
      {
        id: 'gdcd8-01-q5',
        type: 'essay',
        prompt: 'Em hãy đề xuất một thông điệp hoặc sáng kiến ngắn gọn để xây dựng môi trường "Lớp học hạnh phúc - Nói không với bạo lực học đường" tại trường THCS Mỹ Hòa.',
        points: 2,
        explanation: 'Thông điệp mẫu: "Lắng nghe để thấu hiểu - Yêu thương để gắn kết". Sáng kiến: Đặt "Hộp thư điều em muốn nói" kín đáo trong lớp để học sinh chia sẻ khó khăn với cô chủ nhiệm; tổ chức các hoạt động ngoại khóa kết nối nhóm để tăng cường tình bạn lành mạnh.'
      }
    ]
  },
  {
    id: 'asg-gdcd8-02',
    title: 'GDCD 8: Quyền và Nghĩa vụ lao động của công dân',
    subjectId: 'gdcd',
    grade: 8,
    chapter: 'Chủ đề 4: Quyền và nghĩa vụ của công dân',
    description: 'Quy định pháp luật lao động, quyền bình đẳng trong lao động, cấm bóc lột sức lao động của người chưa thành niên.',
    durationMinutes: 40,
    dueDate: '2026-11-30T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdcd-03',
    teacherName: 'Tổ GDCD',
    createdAt: '2026-10-29T10:00:00Z',
    questions: [
      {
        id: 'gdcd8-02-q1',
        type: 'single_choice',
        prompt: 'Theo Bộ luật Lao động Việt Nam, độ tuổi tối thiểu của người lao động bình thường là bao nhiêu tuổi?',
        options: ['Đủ 15 tuổi', 'Đủ 18 tuổi', 'Đủ 16 tuổi', 'Đủ 14 tuổi'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Người lao động là người từ đủ 15 tuổi trở lên, có khả năng lao động và làm việc theo hợp đồng lao động.'
      },
      {
        id: 'gdcd8-02-q2',
        type: 'multiple_choice',
        prompt: 'Những hành vi nào sau đây bị nghiêm cấm trong lĩnh vực lao động? (Chọn các phương án đúng)',
        options: [
          'Phân biệt đối xử về giới tính, dân tộc, tôn giáo trong tuyển dụng và trả lương',
          'Sử dụng lao động chưa thành niên làm các công việc nặng nhọc, độc hại, nguy hiểm',
          'Cưỡng bức lao động, bóc lột sức lao động',
          'Ký kết hợp đồng lao động bằng văn bản đúng quy định pháp luật'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Ký hợp đồng bằng văn bản là nghĩa vụ hợp pháp được pháp luật khuyến khích và bảo vệ.'
      },
      {
        id: 'gdcd8-02-q3',
        type: 'true_false',
        prompt: 'Lao động là nghĩa vụ của mọi công dân đối với xã hội, nhưng đồng thời cũng là quyền thiêng liêng để nuôi sống bản thân và gia đình.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo Hiến pháp và pháp luật lao động.'
      },
      {
        id: 'gdcd8-02-q4',
        type: 'fill_in',
        prompt: 'Văn bản thỏa thuận giữa người lao động và người sử dụng lao động về việc làm có trả công, tiền lương, điều kiện lao động gọi là ___________ lao động.',
        correctAnswer: 'hợp đồng',
        points: 2,
        explanation: 'Hợp đồng lao động là cơ sở pháp lý ràng buộc quyền và nghĩa vụ hai bên.'
      },
      {
        id: 'gdcd8-02-q5',
        type: 'essay',
        prompt: 'Học sinh THCS cần có thái độ và hành động như thế nào đối với lao động và tôn trọng người lao động trong xã hội?',
        points: 2,
        explanation: 'Học sinh cần: 1. Tích cực tham gia lao động tự phục vụ (quét dọn nhà cửa, vệ sinh trường lớp); 2. Tôn trọng mọi nghề nghiệp lương thiện trong xã hội (công nhân quét rác, bác nông dân, thợ xây...); 3. Cố gắng học tập nâng cao tay nghề để mai sau trở thành người lao động có ích.'
      }
    ]
  },

  // ==========================================
  // CÔNG NGHỆ KHỐI 8
  // ==========================================
  {
    id: 'asg-cn8-01',
    title: 'Công nghệ 8: Bản vẽ kỹ thuật và Hình chiếu vuông góc',
    subjectId: 'cong-nghe',
    grade: 8,
    chapter: 'Chương 1: Vẽ kỹ thuật',
    description: 'Phương pháp các hình chiếu vuông góc (hình chiếu đứng, hình chiếu bằng, hình chiếu cạnh) và tiêu chuẩn nét vẽ.',
    durationMinutes: 40,
    dueDate: '2026-11-28T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-cn-03',
    teacherName: 'Tổ Công nghệ',
    createdAt: '2026-10-27T11:00:00Z',
    questions: [
      {
        id: 'cn8-01-q1',
        type: 'single_choice',
        prompt: 'Hình chiếu có hướng chiếu từ trước tới được gọi là hình chiếu gì?',
        options: ['Hình chiếu đứng', 'Hình chiếu bằng', 'Hình chiếu cạnh', 'Hình chiếu trục đo'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Hình chiếu đứng nhìn từ trước tới, phản ánh chiều cao và chiều dài của vật thể.'
      },
      {
        id: 'cn8-01-q2',
        type: 'multiple_choice',
        prompt: 'Vị trí sắp xếp chuẩn của 3 hình chiếu trên bản vẽ kỹ thuật là như thế nào? (Chọn các phương án đúng)',
        options: [
          'Hình chiếu bằng nằm ở ngay phía dưới hình chiếu đứng',
          'Hình chiếu cạnh nằm ở ngay bên phải hình chiếu đứng',
          'Hình chiếu đứng nằm ở góc trên bên trái',
          'Hình chiếu bằng nằm ở trên đỉnh hình chiếu đứng'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Quy tắc chuẩn: Hình chiếu bằng ở dưới hình chiếu đứng, hình chiếu cạnh ở bên phải hình chiếu đứng.'
      },
      {
        id: 'cn8-01-q3',
        type: 'true_false',
        prompt: 'Đường bao khuất và cạnh khuất của vật thể trong bản vẽ kỹ thuật được vẽ bằng nét liền đậm.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì đường bao khuất được vẽ bằng nét đứt mảnh, còn nét liền đậm dùng cho đường bao thấy.'
      },
      {
        id: 'cn8-01-q4',
        type: 'fill_in',
        prompt: 'Hình chiếu có hướng chiếu từ trên xuống dưới trên mặt phẳng nằm ngang gọi là hình chiếu ___________.',
        correctAnswer: 'bằng',
        points: 2,
        explanation: 'Hình chiếu bằng có hướng chiếu từ trên xuống.'
      },
      {
        id: 'cn8-01-q5',
        type: 'essay',
        prompt: 'Nêu công dụng và ý nghĩa của bản vẽ kỹ thuật trong đời sống sản xuất (chế tạo, lắp ráp, thi công).',
        points: 2,
        explanation: 'Bản vẽ kỹ thuật là ngôn ngữ chung của ngành kỹ thuật: 1. Trong sản xuất: Là căn cứ để người thợ gia công, chế tạo chi tiết máy chính xác; 2. Trong thi công: Hướng dẫn thợ lắp ráp, sửa chữa đúng tiêu chuẩn; 3. Trong đời sống: Giúp người tiêu dùng lắp đặt và sử dụng an toàn các thiết bị.'
      }
    ]
  },
  {
    id: 'asg-cn8-02',
    title: 'Công nghệ 8: Cơ khí chế tạo & An toàn sử dụng điện',
    subjectId: 'cong-nghe',
    grade: 8,
    chapter: 'Chương 2 & 3: Cơ khí & Kỹ thuật điện',
    description: 'Vật liệu cơ khí, dụng cụ gia công cắt gọt, nguyên nhân gây tai nạn điện và biện pháp an toàn điện gia đình.',
    durationMinutes: 40,
    dueDate: '2026-11-30T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-cn-03',
    teacherName: 'Tổ Công nghệ',
    createdAt: '2026-10-29T11:00:00Z',
    questions: [
      {
        id: 'cn8-02-q1',
        type: 'single_choice',
        prompt: 'Kim loại nào sau đây là kim loại màu được sử dụng phổ biến nhất để chế tạo dây dẫn điện nhờ tính dẫn điện tuyệt vời?',
        options: ['Đồng (Cu)', 'Sắt (Fe)', 'Chì (Pb)', 'Kẽm (Zn)'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Đồng là kim loại màu có độ dẫn điện và dẫn nhiệt rất cao, chỉ đứng sau bạc.'
      },
      {
        id: 'cn8-02-q2',
        type: 'multiple_choice',
        prompt: 'Những hành động nào sau đây đảm bảo an toàn tuyệt đối khi sử dụng điện trong gia đình? (Chọn các phương án đúng)',
        options: [
          'Không chạm tay ướt vào công tắc điện hoặc phích cắm điện',
          'Ngắt cầu dao (Aptomat) tổng trước khi sửa chữa đường dây điện',
          'Sử dụng các thiết bị đóng cắt tự động chống rò điện (ELCB)',
          'Vừa cắm sạc điện thoại vừa dùng điện thoại chơi game dưới trời mưa giông'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Vừa sạc vừa chơi game dễ gây quá nhiệt nổ pin hoặc giật điện tử vong.'
      },
      {
        id: 'cn8-02-q3',
        type: 'true_false',
        prompt: 'Gang và thép đều là hợp kim của sắt và cacbon, trong đó hàm lượng cacbon trong gang cao hơn trong thép.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Gang chứa > 2,14% C; thép chứa <= 2,14% C.'
      },
      {
        id: 'cn8-02-q4',
        type: 'fill_in',
        prompt: 'Thiết bị bảo vệ tự động ngắt mạch điện khi xảy ra sự cố quá tải hoặc ngắn mạch (chập điện) gọi là cầu chì hoặc áptômát (tiếng Anh viết tắt là ___________).',
        correctAnswer: 'Aptomat',
        points: 2,
        explanation: 'Aptomat (Circuit Breaker).'
      },
      {
        id: 'cn8-02-q5',
        type: 'practice',
        prompt: 'Em hãy nêu các bước sơ cứu khẩn cấp ban đầu khi nhìn thấy một người bị điện giật trong nhà trước khi gọi cấp cứu 115.',
        points: 2,
        explanation: 'Các bước: 1. Ngay lập tức ngắt nguồn điện (ngắt cầu dao/aptomat hoặc rút phích cắm); 2. Nếu không tới được cầu dao, đứng trên vật cách điện khô (ghế gỗ, dép cao su) dùng gậy gỗ/nhựa gạt dây điện ra khỏi nạn nhân (tuyệt đối không dùng tay trần chạm vào nạn nhân); 3. Đưa nạn nhân ra nơi thoáng khí, kiểm tra hơi thở, nếu ngừng thở thì hô hấp nhân tạo/ép tim lồng ngực và gọi cấp cứu 115.'
      }
    ]
  },
  // ==========================================
  // ÂM NHẠC KHỐI 8 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-nhac8-01',
    title: 'Bài tập Âm nhạc 8: Giọng Đô trưởng & Giọng La thứ tự nhiên',
    subjectId: 'am-nhac',
    grade: 8,
    description: 'Học thuyết cấu tạo gam trưởng, gam thứ tự nhiên, nốt chủ âm và phân biệt sắc thái tươi vui/trầm lắng của hai giọng song song.',
    durationMinutes: 15,
    dueDate: '2026-12-17T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-nhac-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-25T09:00:00Z',
    questions: [
      {
        id: 'nhac8-01-q1',
        type: 'single_choice',
        prompt: 'Gam Đô trưởng (C-dur) và gam La thứ tự nhiên (a-moll) có mối quan hệ như thế nào trong lí thuyết âm nhạc?',
        options: [
          'Là hai giọng song song vì có cùng chung hóa biểu (không có dấu thăng hoặc giáng nào)',
          'Là hai giọng đồng tên vì có cùng nốt chủ âm Đô',
          'Là hai thể loại nhạc cụ hoàn toàn đối lập',
          'Là hai giai điệu có cùng số nhịp 6/8'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Giọng Đô trưởng và La thứ là cặp giọng song song, không có dấu hóa ở đầu khuông nhạc.'
      },
      {
        id: 'nhac8-01-q2',
        type: 'multiple_choice',
        prompt: 'Cung bậc nào sau đây trong gam Đô trưởng có khoảng cách là nửa cung (1/2 cung)? (Chọn các phương án đúng)',
        options: [
          'Khoảng cách giữa bậc III (Mi) và bậc IV (Pha)',
          'Khoảng cách giữa bậc VII (Si) và bậc I (Đô)',
          'Khoảng cách giữa bậc I (Đô) và bậc II (Rê)'
        ],
        correctAnswer: [0, 1],
        points: 2,
        explanation: 'Trong thang âm trưởng tự nhiên, nửa cung nằm ở giữa bậc III-IV và VII-I.'
      },
      {
        id: 'nhac8-01-q3',
        type: 'true_false',
        prompt: 'Giai điệu viết ở giọng trưởng thường mang tính chất trong sáng, tươi vui, còn giọng thứ thường mang màu sắc trầm lắng, tha thiết.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo quy luật cảm thụ sắc thái âm nhạc phương Tây.'
      },
      {
        id: 'nhac8-01-q4',
        type: 'fill_in',
        prompt: 'Bậc I trong một thang âm giữ vai trò trung tâm ổn định nhất của toàn bộ bản nhạc được gọi là âm ________ (hoặc chủ âm).',
        correctAnswer: 'chủ',
        points: 2,
        explanation: 'Âm chủ (Tonic).'
      },
      {
        id: 'nhac8-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu cảm nhận sau khi nghe bài hát "Hò kéo pháo" của nhạc sĩ Hoàng Vân và phân tích khí thế anh dũng của bộ đội ta trong chiến dịch Điện Biên Phủ.',
        points: 2,
        explanation: 'Học sinh trình bày: Tiết tấu dồn dập, khỏe khoắn như tiếng bước chân và nhịp thở của các chiến sĩ kéo từng cỗ pháo nặng hàng tấn qua đèo cao dốc thẳm vì độc lập tự do.'
      }
    ]
  },
  {
    id: 'asg-nhac8-02',
    title: 'Bài tập Âm nhạc 8: Danh nhân Âm nhạc Thế giới - Mozart & Beethoven',
    subjectId: 'am-nhac',
    grade: 8,
    description: 'Tìm hiểu cuộc đời và các cống hiến vĩ đại của W.A. Mozart và L.V. Beethoven cho nền âm nhạc cổ điển phương Tây.',
    durationMinutes: 15,
    dueDate: '2026-12-22T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-nhac-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-26T09:00:00Z',
    questions: [
      {
        id: 'nhac8-02-q1',
        type: 'single_choice',
        prompt: 'Nhà soạn nhạc người Đức nào dù bị điếc hoàn toàn ở nửa sau cuộc đời nhưng vẫn kiên cường sáng tác nên Bản giao hưởng số 9 bất hủ?',
        options: [
          'Ludwig van Beethoven',
          'Wolfgang Amadeus Mozart',
          'Johann Sebastian Bach',
          'Frédéric Chopin'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Beethoven bị suy giảm thính lực nghiêm trọng nhưng đã vượt lên số phận tạo nên đỉnh cao Giao hưởng số 9.'
      },
      {
        id: 'nhac8-02-q2',
        type: 'multiple_choice',
        prompt: 'Những tác phẩm nào sau đây là kiệt tác của thần đồng âm nhạc người Áo W.A. Mozart? (Chọn các phương án đúng)',
        options: [
          'Bản sonata Ánh trăng số 14',
          'Khúc nhạc đêm thanh thản (Eine kleine Nachtmusik)',
          'Hành khúc Thổ Nhĩ Kỳ (Rondo Alla Turca)',
          'Vở nhạc kịch Cây sáo thần (Die Zauberflöte)'
        ],
        correctAnswer: [1, 2, 3],
        points: 2,
        explanation: 'Bản sonata Ánh trăng là của Beethoven; các tác phẩm còn lại đều của Mozart.'
      },
      {
        id: 'nhac8-02-q3',
        type: 'true_false',
        prompt: 'Mozart bắt đầu biểu diễn dương cầm và sáng tác các tác phẩm âm nhạc từ khi mới chỉ 4 đến 5 tuổi.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Mozart được công nhận là thần đồng âm nhạc hiếm có trong lịch sử nhân loại.'
      },
      {
        id: 'nhac8-02-q4',
        type: 'fill_in',
        prompt: 'Đoạn nhạc "Khải hoàn ca" (Ode to Joy) rực rỡ niềm tin chiến thắng nằm ở chương IV của bản giao hưởng số ________ của Beethoven.',
        correctAnswer: '9',
        points: 2,
        explanation: 'Giao hưởng số 9 (Symphony No. 9 in D minor).'
      },
      {
        id: 'nhac8-02-q5',
        type: 'essay',
        prompt: 'Từ tấm gương vượt qua nghịch cảnh mất đi thính giác của Beethoven để cống hiến cho đời, em rút ra bài học gì về ý chí và nghị lực trong học tập?',
        points: 2,
        explanation: 'Học sinh nêu: Không bao giờ gục ngã trước khó khăn, coi thách thức là cơ hội rèn luyện bản lĩnh, nỗ lực kiên trì theo đuổi đam mê và ước mơ cao đẹp.'
      }
    ]
  },
  // ==========================================
  // MĨ THUẬT KHỐI 8 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-mt8-01',
    title: 'Bài tập Mĩ thuật 8: Thiết kế Bao bì sản phẩm & Mĩ thuật quảng cáo',
    subjectId: 'mi-thuat',
    grade: 8,
    description: 'Quy trình tạo hình bao bì hộp giấy, nhãn mác, nghệ thuật trình bày thông tin sản phẩm và kích thích thị giác người tiêu dùng.',
    durationMinutes: 15,
    dueDate: '2026-12-20T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-mt-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-27T09:00:00Z',
    questions: [
      {
        id: 'mt8-01-q1',
        type: 'single_choice',
        prompt: 'Bao bì sản phẩm hàng hóa trong đời sống thực tế đóng vai trò chính là gì?',
        options: [
          'Bảo vệ sản phẩm bên trong, cung cấp thông tin cần thiết và quảng bá hình ảnh thương hiệu đến người tiêu dùng',
          'Chỉ để làm tăng thêm trọng lượng khi vận chuyển',
          'Bắt buộc phải che giấu toàn bộ thông tin xuất xứ',
          'Chỉ sử dụng một lần và không được in bất kì màu sắc nào'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Bao bì có chức năng bảo vệ, thẩm mĩ và cung cấp thông tin nhận diện sản phẩm.'
      },
      {
        id: 'mt8-01-q2',
        type: 'multiple_choice',
        prompt: 'Một bản thiết kế nhãn mác sản phẩm tiêu chuẩn cần có những yếu tố đồ họa nào? (Chọn các phương án đúng)',
        options: [
          'Tên sản phẩm và nhãn hiệu (thương hiệu)',
          'Hình ảnh minh họa đặc trưng',
          'Thông tin thành phần, khối lượng, hạn sử dụng',
          'Mã vạch và thông tin nhà sản xuất'
        ],
        correctAnswer: [0, 1, 2, 3],
        points: 2,
        explanation: 'Cả 4 yếu tố đều là thành phần chuẩn mực của nhãn hàng tiêu dùng.'
      },
      {
        id: 'mt8-01-q3',
        type: 'true_false',
        prompt: 'Xu hướng thiết kế bao bì hiện đại ưu tiên sử dụng vật liệu thân thiện môi trường như giấy tái chế, lá khô có thể phân hủy sinh học.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo xu thế phát triển xanh và bền vững.'
      },
      {
        id: 'mt8-01-q4',
        type: 'fill_in',
        prompt: 'Bản vẽ khai triển các mặt phẳng của chiếc hộp giấy bao gồm cả mép dán trước khi gấp tạo hình gọi là bản vẽ khai ________.',
        correctAnswer: 'triển',
        points: 2,
        explanation: 'Bản vẽ khai triển (net / pattern).'
      },
      {
        id: 'mt8-01-q5',
        type: 'practice',
        prompt: 'Em hãy nêu ý tưởng thiết kế một mẫu bao bì đựng đặc sản "Đường thốt nốt An Giang" của địa phương, mô tả hình ảnh minh họa, màu sắc và thông điệp văn hóa em gửi gắm.',
        points: 2,
        explanation: 'Học sinh nêu: Hình ảnh (hàng thốt nốt soi bóng trên cánh đồng lúa, lò nấu đường truyền thống); Màu sắc (vàng óng của đường thốt nốt phối với nâu ấm mộc mạc); Thông điệp (Hương vị ngọt ngào từ xứ sở thốt nốt Bảy Núi An Giang).'
      }
    ]
  },
  {
    id: 'asg-mt8-02',
    title: 'Bài tập Mĩ thuật 8: Thiết kế Nhân vật & Phim hoạt hình',
    subjectId: 'mi-thuat',
    grade: 8,
    description: 'Nghệ thuật xây dựng tạo hình nhân vật truyện tranh, tỉ lệ cơ thể, biểu cảm gương mặt và kịch bản phân cảnh (Storyboard).',
    durationMinutes: 15,
    dueDate: '2026-12-24T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-mt-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-28T09:00:00Z',
    questions: [
      {
        id: 'mt8-02-q1',
        type: 'single_choice',
        prompt: 'Bản vẽ chuỗi khung hình nối tiếp kèm lời thoại mô tả diễn biến từng cảnh phim trước khi quay hoặc dựng phim gọi là gì?',
        options: [
          'Kịch bản phân cảnh (Storyboard)',
          'Sơ đồ tư duy',
          'Biểu đồ thống kê',
          'Bản đồ địa chính'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Storyboard là kịch bản phân cảnh bằng tranh vẽ rất quan trọng trong điện ảnh và hoạt hình.'
      },
      {
        id: 'mt8-02-q2',
        type: 'multiple_choice',
        prompt: 'Khi thiết kế nhân vật hoạt hình, họa sĩ thường cách điệu những yếu tố nào để làm nổi bật cá tính nhân vật? (Chọn các phương án đúng)',
        options: [
          'Đôi mắt và biểu cảm khuôn mặt',
          'Trang phục và phụ kiện đặc trưng',
          'Dáng đứng và tỉ lệ đầu so với thân',
          'Số lượng hồng cầu trong máu'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Biểu cảm, trang phục và tỉ lệ cơ thể là các công cụ tạo hình nhân vật chủ yếu.'
      },
      {
        id: 'mt8-02-q3',
        type: 'true_false',
        prompt: 'Kĩ thuật hoạt hình tĩnh vật (Stop Motion) tạo chuyển động bằng cách chụp liên tục từng cử động nhỏ của mô hình đất nặn hoặc con rối rồi ghép lại với tốc độ cao.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo nguyên lí làm phim Stop Motion truyền thống.'
      },
      {
        id: 'mt8-02-q4',
        type: 'fill_in',
        prompt: 'Để tạo cảm giác chuyển động mượt mà cho mắt người, phim hoạt hình tiêu chuẩn thường cần chiếu tối thiểu 24 khung ________ trong một giây.',
        correctAnswer: 'hình',
        points: 2,
        explanation: '24 khung hình/giây (fps).'
      },
      {
        id: 'mt8-02-q5',
        type: 'essay',
        prompt: 'Em hãy sáng tạo và phác thảo một nhân vật hoạt hình mang tên "Hiệp sĩ Môi trường xanh" gồm: Ngoại hình, trang phục, vũ khí/bảo bối và sứ mệnh bảo vệ nguồn nước dòng sông quê hương.',
        points: 2,
        explanation: 'Học sinh mô tả sáng tạo: Trang phục áo choàng xanh lá từ sợi thực vật tái chế; chiếc gậy phép lọc sạch nước thải; sứ mệnh đồng hành cùng các bạn học sinh dọn sạch rác kênh rạch và tuyên truyền trồng cây xanh.'
      }
    ]
  },
  // ==========================================
  // GIÁO DỤC THỂ CHẤT KHỐI 8 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-gdtc8-01',
    title: 'Bài tập Giáo dục thể chất 8: Kĩ thuật nhảy cao kiểu bước qua',
    subjectId: 'giao-duc-the-chat',
    grade: 8,
    description: 'Bốn giai đoạn kĩ thuật nhảy cao bước qua: Chạy đà có nhịp điệu, Giậm nhảy uy lực, Qua xà và Rơi xuống đệm an toàn.',
    durationMinutes: 15,
    dueDate: '2026-12-17T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdtc-01',
    teacherName: 'Tổ GDTC',
    createdAt: '2026-10-25T10:30:00Z',
    questions: [
      {
        id: 'gdtc8-01-q1',
        type: 'single_choice',
        prompt: 'Trong kĩ thuật nhảy cao kiểu bước qua, góc độ chạy đà so với mặt phẳng thanh xà hợp lí nhất là:',
        options: [
          'Khoảng 25 đến 40 độ',
          'Vuông góc 90 độ',
          'Song song 0 độ sát thanh xà',
          'Khoảng 75 đến 85 độ'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Góc chạy đà chuẩn từ 25 - 40 độ tạo điều kiện thuận lợi cho việc giậm nhảy và lăng chân qua xà.'
      },
      {
        id: 'gdtc8-01-q2',
        type: 'multiple_choice',
        prompt: 'Giai đoạn giậm nhảy trong nhảy cao bước qua đòi hỏi những yếu tố kĩ thuật nào? (Chọn các phương án đúng)',
        options: [
          'Đặt chân giậm nhanh, mạnh bằng gót rồi chuyển sang cả bàn chân',
          'Chân lăng đá mạnh từ sau ra trước - lên cao theo hướng xà',
          'Hai tay phối hợp đánh mạnh từ sau ra trước - lên cao',
          'Dừng lại nghỉ 5 giây tại điểm giậm nhảy'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Giậm nhảy nhanh mạnh, đá chân lăng và đánh tay đồng bộ để tạo lực nâng trọng tâm cơ thể.'
      },
      {
        id: 'gdtc8-01-q3',
        type: 'true_false',
        prompt: 'Khi rơi xuống hố cát hoặc đệm sau khi qua xà, người nhảy phải chủ động chùng gối để hoãn xung giảm chấn động cho cột sống và khớp gối.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo nguyên tắc an toàn tiếp đất hoãn xung trong điền kinh.'
      },
      {
        id: 'gdtc8-01-q4',
        type: 'fill_in',
        prompt: 'Chân dùng để phát lực đẩy cơ thể rời khỏi mặt đất bay lên cao gọi là chân ________ nhảy.',
        correctAnswer: 'giậm',
        points: 2,
        explanation: 'Chân giậm (hoặc giậm nhảy).'
      },
      {
        id: 'gdtc8-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu các biện pháp đảm bảo an toàn, phòng ngừa chấn thương bong gân hoặc lật cổ chân khi tham gia tập luyện môn nhảy cao tại trường.',
        points: 2,
        explanation: 'Học sinh nêu: Khởi động kĩ khớp cổ chân, khớp gối; kiểm tra đệm nhảy xốp dày êm hoặc hố cát tơi xốp không có sỏi đá; cột xà và giá đỡ vững chắc; tuân thủ đúng kĩ thuật tiếp đất hoãn xung.'
      }
    ]
  },
  {
    id: 'asg-gdtc8-02',
    title: 'Bài tập Giáo dục thể chất 8: Kĩ thuật môn Cầu lông cơ bản',
    subjectId: 'giao-duc-the-chat',
    grade: 8,
    description: 'Kĩ thuật cầm vợt thuận tay/trái tay, tư thế di chuyển bước đơn - bước kép và kĩ thuật đánh cầu cao thuận tay.',
    durationMinutes: 15,
    dueDate: '2026-12-22T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdtc-01',
    teacherName: 'Tổ GDTC',
    createdAt: '2026-10-26T10:30:00Z',
    questions: [
      {
        id: 'gdtc8-02-q1',
        type: 'single_choice',
        prompt: 'Khi cầm vợt cầu lông thuận tay (cầm vợt số 1), khe giữa ngón tay cái và ngón tay trỏ tạo thành hình chữ gì?',
        options: [
          'Hình chữ V hướng thẳng theo cạnh trên của cán vợt',
          'Hình chữ O tròn ôm chặt cán vợt',
          'Hình chữ X bắt chéo',
          'Nắm cả 5 ngón thành một khối cứng nhắc'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Cầm vợt thuận tay: ngón cái và ngón trỏ tạo thành góc nhọn hình chữ V dọc sống cán vợt.'
      },
      {
        id: 'gdtc8-02-q2',
        type: 'multiple_choice',
        prompt: 'Những sai lầm thường gặp của học sinh khi thực hiện kĩ thuật phát cầu cao sâu thuận tay là: (Chọn các phương án đúng)',
        options: [
          'Mặt vợt tiếp xúc quả cầu ở vị trí quá cao trên thắt lưng (phạm quy giao cầu)',
          'Không xoay cổ tay phát lực làm cầu đi ngắn, không bay sâu về cuối sân',
          'Chân bước nhấc hoàn toàn khỏi mặt đất trước khi vợt chạm cầu',
          'Vung vợt từ sau ra trước theo quán tính tự nhiên'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Phát cầu quá thắt lưng, thiếu lực cổ tay hoặc nhấc chân khi phát cầu là các lỗi phổ biến.'
      },
      {
        id: 'gdtc8-02-q3',
        type: 'true_false',
        prompt: 'Trong thi đấu cầu lông đôi, quả cầu rơi chạm đúng vạch giới hạn của sân thi đấu thì vẫn được trọng tài tính là cầu trong sân (tính điểm).',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo luật cầu lông quốc tế (BWF).'
      },
      {
        id: 'gdtc8-02-q4',
        type: 'fill_in',
        prompt: 'Kĩ thuật đánh cầu bay bổng và cắm sâu về góc cuối sân của đối phương gọi là quả đánh cầu cao ________ tay.',
        correctAnswer: 'thuận',
        points: 2,
        explanation: 'Đánh cầu cao thuận tay (Forehand clear).'
      },
      {
        id: 'gdtc8-02-q5',
        type: 'essay',
        prompt: 'Chơi môn thể thao cầu lông thường xuyên đem lại những lợi ích gì cho hệ tim mạch, sự nhanh nhẹn của thị giác và phản xạ thần kinh của học sinh?',
        points: 2,
        explanation: 'Học sinh nêu: Cầu lông là môn vận động toàn thân giúp tăng dung tích phổi và nhịp đập tim khỏe mạnh; mắt phải quan sát quỹ đạo cầu bay tốc độ cao giúp tăng cường thị lực; rèn luyện khả năng di chuyển linh hoạt và phản xạ ra quyết định nhanh nhạy.'
      }
    ]
  },
  // ==========================================
  // HOẠT ĐỘNG TRẢI NGHIỆM KHỐI 8 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-hdtn8-01',
    title: 'Bài tập Hoạt động trải nghiệm 8: Quản lí Chi tiêu & Văn hóa Gia đình',
    subjectId: 'hoat-dong-trai-nghiem',
    grade: 8,
    description: 'Kĩ năng lập kế hoạch tài chính cá nhân, phân biệt giữa "nhu cầu thiết yếu" và "mong muốn", gìn giữ nếp sống hòa thuận trong gia đình.',
    durationMinutes: 15,
    dueDate: '2026-12-18T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-hdtn-01',
    teacherName: 'Tổ Hoạt động Trải nghiệm',
    createdAt: '2026-10-25T11:00:00Z',
    questions: [
      {
        id: 'hdtn8-01-q1',
        type: 'single_choice',
        prompt: 'Quy tắc chi tiêu thông minh 50/30/20 khuyên chúng ta nên ưu tiên 50% thu nhập cho mục đích nào?',
        options: [
          'Các nhu cầu thiết yếu hàng ngày (ăn uống, học tập, sinh hoạt căn bản)',
          'Mua sắm đồ chơi xa xỉ và ăn vặt cùng bạn bè',
          'Đầu tư mạo hiểm trên mạng xã hội',
          'Để trống không làm gì'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Quy tắc 50/30/20: 50% cho nhu cầu thiết yếu, 30% cho mong muốn giải trí, 20% cho tiết kiệm tương lai.'
      },
      {
        id: 'hdtn8-01-q2',
        type: 'multiple_choice',
        prompt: 'Những hành động nào sau đây thể hiện sự thấu hiểu và chia sẻ trách nhiệm tài chính với cha mẹ trong gia đình? (Chọn các phương án đúng)',
        options: [
          'Giữ gìn sách vở, đồ dùng học tập cẩn thận để tái sử dụng lâu bền',
          'Tắt các thiết bị điện khi không sử dụng để tiết kiệm hóa đơn tiền điện',
          'Không đòi hỏi cha mẹ mua điện thoại đắt tiền vượt quá khả năng kinh tế gia đình',
          'Bí mật lấy tiền tiết kiệm của cha mẹ đi tiêu xài'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Tiết kiệm đồ dùng, tiết kiệm điện nước và không vòi vĩnh thể hiện sự hiếu thảo và biết thương cha mẹ.'
      },
      {
        id: 'hdtn8-01-q3',
        type: 'true_false',
        prompt: 'Nuôi heo đất tiết kiệm những đồng tiền nhỏ lẻ mỗi ngày là thói quen tài chính tốt giúp em có nguồn dự phòng khi gặp tình huống cấp bách.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo kĩ năng quản lí tài chính cá nhân cho học sinh.'
      },
      {
        id: 'hdtn8-01-q4',
        type: 'fill_in',
        prompt: 'Khoản tiền được dành riêng không tiêu xài để phòng khi ốm đau hoặc sự cố bất ngờ gọi là quỹ dự ________.',
        correctAnswer: 'phòng',
        points: 2,
        explanation: 'Quỹ dự phòng (Emergency fund).'
      },
      {
        id: 'hdtn8-01-q5',
        type: 'essay',
        prompt: 'Em hãy lập một kế hoạch sử dụng hợp lí số tiền lì xì Tết (hoặc tiền thưởng học tập) của mình theo 3 phần: Tiết kiệm dài hạn, Phục vụ học tập và Chia sẻ yêu thương.',
        points: 2,
        explanation: 'Học sinh phân bổ cụ thể: 50% gửi tiết kiệm hoặc nuôi heo đất; 30% mua dụng cụ học tập và sách tham khảo năm học mới; 20% phụ giúp mua quà mừng thọ ông bà hoặc ủng hộ quỹ bạn nghèo trường THCS Mỹ Hòa.'
      }
    ]
  },
  {
    id: 'asg-hdtn8-02',
    title: 'Bài tập Hoạt động trải nghiệm 8: Khám phá Sở thích & Xu hướng Nghề nghiệp',
    subjectId: 'hoat-dong-trai-nghiem',
    grade: 8,
    description: 'Nhận diện nhóm tính cách, năng khiếu cá nhân và tìm hiểu các ngành nghề trong xã hội hiện đại để bước đầu định hướng tương lai.',
    durationMinutes: 15,
    dueDate: '2026-12-23T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-hdtn-01',
    teacherName: 'Tổ Hoạt động Trải nghiệm',
    createdAt: '2026-10-26T11:00:00Z',
    questions: [
      {
        id: 'hdtn8-02-q1',
        type: 'single_choice',
        prompt: 'Theo thuyết mật mã Holland (RIASEC), một học sinh yêu thích sửa chữa máy móc, lắp ráp linh kiện điện tử và làm việc với công cụ thường thuộc nhóm sở thích nghề nghiệp nào?',
        options: [
          'Nhóm Kỹ thuật / Thực tế (Realistic)',
          'Nhóm Nghệ thuật (Artistic)',
          'Nhóm Xã hội (Social)',
          'Nhóm Nghiệp vụ quản trị (Conventional)'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Nhóm Kỹ thuật (Realistic) đặc trưng bởi sự yêu thích thao tác với máy móc, công cụ và vật thể thực tế.'
      },
      {
        id: 'hdtn8-02-q2',
        type: 'multiple_choice',
        prompt: 'Khi lựa chọn một nghề nghiệp tương lai, học sinh cần cân nhắc sự giao thoa hài hòa giữa những yếu tố then chốt nào? (Chọn các phương án đúng)',
        options: [
          'Sở thích và niềm đam mê thực sự của bản thân',
          'Năng lực, thế mạnh và sức khỏe của bản thân',
          'Nhu cầu tuyển dụng của thị trường lao động xã hội',
          'Sự rủ rê theo trào lưu nhất thời của đám đông'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Đam mê, năng lực cá nhân và nhu cầu xã hội là mô hình tam giác hướng nghiệp vững chắc.'
      },
      {
        id: 'hdtn8-02-q3',
        type: 'true_false',
        prompt: 'Chỉ có những ngành nghề bàn giấy văn phòng mới là nghề cao quý, còn lao động tay chân kĩ thuật lành nghề thì không đáng trân trọng.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai. Mọi nghề nghiệp chân chính mang lại lợi ích cho xã hội đều đáng tự hào và được tôn trọng bình đẳng.'
      },
      {
        id: 'hdtn8-02-q4',
        type: 'fill_in',
        prompt: 'Tập hợp các kiến thức, kĩ năng và kinh nghiệm tích lũy giúp một người làm tốt một công việc chuyên môn gọi là năng ________ nghề nghiệp.',
        correctAnswer: 'lực',
        points: 2,
        explanation: 'Năng lực nghề nghiệp.'
      },
      {
        id: 'hdtn8-02-q5',
        type: 'essay',
        prompt: 'Em hãy viết đoạn văn (5-7 dòng) mô tả về một nghề nghiệp mà em mơ ước được làm trong tương lai và những kĩ năng em cần tích cực rèn luyện ngay từ khi học lớp 8.',
        points: 2,
        explanation: 'Học sinh trình bày: Tên nghề nghiệp mơ ước (bác sĩ, lập trình viên, giáo viên, kĩ sư nông nghiệp, nhà thiết kế); Lí do đam mê; Kế hoạch rèn luyện (học tốt môn Toán, Tin, Ngoại ngữ, rèn luyện giao tiếp và tính kiên trì).'
      }
    ]
  },
  // ==========================================
  // GIÁO DỤC ĐỊA PHƯƠNG KHỐI 8 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-gddp8-01',
    title: 'Bài tập Giáo dục địa phương 8: Kinh tế Nông nghiệp công nghệ cao An Giang',
    subjectId: 'giao-duc-dia-phuong',
    grade: 8,
    description: 'Tìm hiểu thế mạnh xuất khẩu lúa gạo chất lượng cao, chuỗi giá trị cá tra - basa và ứng dụng công nghệ số trong nông nghiệp địa phương.',
    durationMinutes: 15,
    dueDate: '2026-12-19T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gddp-01',
    teacherName: 'Tổ Ngữ Văn',
    createdAt: '2026-10-25T11:30:00Z',
    questions: [
      {
        id: 'gddp8-01-q1',
        type: 'single_choice',
        prompt: 'Mặt hàng thủy sản nước ngọt nào là biểu tượng xuất khẩu chủ lực mang lại kim ngạch hàng trăm triệu USD mỗi năm của tỉnh An Giang?',
        options: [
          'Cá tra và cá basa phi lê',
          'Cá hồi đại dương',
          'Tôm hùm Alaska',
          'Cá ngừ đại dương'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'An Giang là cái nôi nuôi và chế biến xuất khẩu cá tra, basa hàng đầu thế giới.'
      },
      {
        id: 'gddp8-01-q2',
        type: 'multiple_choice',
        prompt: 'Việc ứng dụng nông nghiệp công nghệ cao tại các hợp tác xã An Giang hiện nay gồm những mô hình nào? (Chọn các phương án đúng)',
        options: [
          'Sử dụng thiết bị bay không người lái (Drone) để sạ giống, bón phân và phun thuốc bảo vệ thực vật',
          'Sản xuất lúa theo tiêu chuẩn VietGAP, GlobalGAP xuất khẩu sang châu Âu',
          'Nuôi cá tra tuần hoàn nước khép kín bảo vệ môi trường sông',
          'Săn bắt động vật hoang dã trái phép'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Máy bay không người lái, quy chuẩn VietGAP và nuôi trồng tuần hoàn là hướng đi hiện đại của nông nghiệp An Giang.'
      },
      {
        id: 'gddp8-01-q3',
        type: 'true_false',
        prompt: 'Mô hình "Cánh đồng lớn" liên kết giữa nông dân với doanh nghiệp chế biến bao tiêu sản phẩm giúp đảm bảo đầu ra nông sản ổn định và nâng cao thu nhập cho nông dân.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo định hướng phát triển chuỗi giá trị nông nghiệp của An Giang.'
      },
      {
        id: 'gddp8-01-q4',
        type: 'fill_in',
        prompt: 'Giống lúa thơm cao cấp nức tiếng của An Giang thường xuyên đạt giải thưởng gạo ngon là giống lúa Jasmine hoặc lúa Lộc ________.',
        correctAnswer: 'trời',
        points: 2,
        explanation: 'Tập đoàn Lộc Trời (An Giang).'
      },
      {
        id: 'gddp8-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu cảm nghĩ về sự chuyển mình của người nông dân thế hệ mới tại An Giang khi biết ứng dụng smartphone và công nghệ số vào sản xuất lúa gạo chất lượng cao.',
        points: 2,
        explanation: 'Học sinh trình bày: Nông dân thời đại 4.0 không chỉ bán mặt cho đất bán lưng cho trời mà còn chủ động theo dõi thời tiết, kiểm tra sâu bệnh qua app di động, điều khiển máy bay phun thuốc; nâng cao vị thế hạt gạo Việt trên trường quốc tế.'
      }
    ]
  },
  {
    id: 'asg-gddp8-02',
    title: 'Bài tập Giáo dục địa phương 8: Nghệ thuật Đờn ca tài tử Nam Bộ',
    subjectId: 'giao-duc-dia-phuong',
    grade: 8,
    description: 'Di sản văn hóa phi vật thể đại diện của nhân loại: nguồn gốc, bộ ngũ tuyệt nhạc cụ và giá trị tinh thần của Đờn ca tài tử tại An Giang.',
    durationMinutes: 15,
    dueDate: '2026-12-24T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gddp-01',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-26T11:30:00Z',
    questions: [
      {
        id: 'gddp8-02-q1',
        type: 'single_choice',
        prompt: 'Nghệ thuật Đờn ca tài tử Nam Bộ đã được tổ chức UNESCO vinh danh là Di sản văn hóa phi vật thể đại diện của nhân loại vào năm nào?',
        options: [
          'Năm 2013',
          'Năm 2000',
          'Năm 2025',
          'Năm 1995'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'UNESCO chính thức ghi danh Nghệ thuật Đờn ca tài tử Nam Bộ vào ngày 5/12/2013.'
      },
      {
        id: 'gddp8-02-q2',
        type: 'multiple_choice',
        prompt: 'Những nhạc cụ truyền thống nào thường xuyên hiện diện trong dàn nhạc Đờn ca tài tử Nam Bộ? (Chọn các phương án đúng)',
        options: [
          'Đàn kìm (đàn nguyệt)',
          'Đàn tranh (thập lục)',
          'Đàn cò (đàn nhị) và Guitar phím lõm',
          'Kèn saxophone jazz'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Đàn kìm, đàn tranh, đàn cò và guitar phím lõm là linh hồn của dàn nhạc tài tử Nam Bộ.'
      },
      {
        id: 'gdtc8-02-q3',
        type: 'true_false',
        prompt: 'Bản "Dạ cổ hoài lang" (Đêm khuya nghe tiếng trống nhớ chồng) của nhạc sĩ Cao Văn Lầu là tiền đề phát triển mạnh mẽ của sân khấu Cải lương Nam Bộ.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo lịch sử âm nhạc cổ truyền Nam Bộ.'
      },
      {
        id: 'gddp8-02-q4',
        type: 'fill_in',
        prompt: 'Trong dàn nhạc tài tử, cây đàn gảy giữ nhịp chủ đạo được ví là cây đàn đứng đầu dàn nhạc là cây đàn ________ (đàn nguyệt).',
        correctAnswer: 'kìm',
        points: 2,
        explanation: 'Đàn kìm.'
      },
      {
        id: 'gddp8-02-q5',
        type: 'essay',
        prompt: 'Em hãy viết một đoạn văn ngắn (4-6 dòng) nêu cảm nhận về nét phóng khoáng, tình nghĩa của con người Nam Bộ qua những câu ca vọng cổ ngọt ngào bên dòng sông Hậu.',
        points: 2,
        explanation: 'Học sinh phân tích: Lời ca mộc mạc chân phương chan chứa nghĩa tình thủy chung; phản ánh tâm hồn rộng mở, hào sảng, hiếu khách của người dân Nam Bộ kiên cường khai hoang mở đất; gợi niềm tự hào sâu sắc về bản sắc quê hương.'
      }
    ]
  }
];


