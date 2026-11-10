import { Assignment } from '../../types';

export const GRADE_9_ASSIGNMENTS: Assignment[] = [
  // ==========================================
  // TIẾNG ANH KHỐI 9 (GLOBAL SUCCESS / CHUẨN GDPT 2018)
  // ==========================================
  {
    id: 'asg-eng9-01',
    title: 'Unit 1: Local Community - Question Words Before To-Infinitives',
    subjectId: 'tieng-anh',
    grade: 9,
    chapter: 'Unit 1: Local Community',
    description: 'Nắm vững từ vựng về các làng nghề thủ công truyền thống, cấu trúc từ để hỏi đi kèm to-V và cụm động từ (phrasal verbs).',
    durationMinutes: 45,
    dueDate: '2026-11-26T23:59:00Z',
    maxPoints: 10,
    maxAttempts: 3,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-eng-04',
    teacherName: 'Tổ Tiếng Anh',
    createdAt: '2026-10-25T09:30:00Z',
    questions: [
      {
        id: 'eng9-01-q1',
        type: 'single_choice',
        prompt: 'Choose the correct form: She asked her mother where ________ the best ceramic vases in Bat Trang village.',
        options: ['to buy', 'buying', 'bought', 'buys'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Cấu trúc "question word + to-infinitive" biểu thị mệnh đề rút gọn: where to buy.'
      },
      {
        id: 'eng9-01-q2',
        type: 'multiple_choice',
        prompt: 'Which phrasal verbs mean to establish or start a business, organization, or project? (Select all correct answers)',
        options: ['set up', 'start up', 'turn down', 'pass down'],
        correctAnswer: [0, 1],
        points: 2,
        explanation: '"Set up" và "start up" có nghĩa là thành lập, khởi nghiệp. "Turn down" là từ chối, "pass down" là truyền lại thế hệ sau.'
      },
      {
        id: 'eng9-01-q3',
        type: 'true_false',
        prompt: 'The phrasal verb "pass down" means to transfer skills, customs, or traditional crafts from older generations to younger generations.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. "Pass down" mang nghĩa lưu truyền qua các thế hệ.'
      },
      {
        id: 'eng9-01-q4',
        type: 'fill_in',
        prompt: 'Fill in the blank with the correct preposition: We are really looking forward ________ visiting Van Phuc silk village this Sunday.',
        correctAnswer: 'to',
        points: 2,
        explanation: 'Cụm thành ngữ cố định "look forward to + V-ing" (mong đợi điều gì).'
      },
      {
        id: 'eng9-01-q5',
        type: 'essay',
        prompt: 'Write a short paragraph (5-7 sentences) introducing a traditional craft village in Vietnam (e.g., Bat Trang pottery, Dong Ho painting, Van Phuc silk). Mention its location, main products, and why preserving it is important.',
        points: 2,
        explanation: 'Gợi ý: Bat Trang pottery village is situated on the bank of the Red River in Hanoi. It is famous for high-quality ceramic bowls, plates, and vases. Artisans have passed down traditional pottery techniques for centuries. Preserving this craft village helps maintain Vietnamese cultural identity and attracts international tourists.'
      }
    ]
  },
  {
    id: 'asg-eng9-02',
    title: 'Unit 2: City Life - Double Comparatives & Urban Vocabulary',
    subjectId: 'tieng-anh',
    grade: 9,
    chapter: 'Unit 2: City Life',
    description: 'Thực hành cấu trúc so sánh kép (The + comparative..., the + comparative...) và từ vựng về đô thị hóa.',
    durationMinutes: 40,
    dueDate: '2026-11-28T23:59:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-eng-04',
    teacherName: 'Tổ Tiếng Anh',
    createdAt: '2026-10-27T10:30:00Z',
    questions: [
      {
        id: 'eng9-02-q1',
        type: 'single_choice',
        prompt: 'Complete the double comparative: The more modern a city becomes, ________ the cost of living is.',
        options: ['the higher', 'the highest', 'higher', 'the more high'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Cấu trúc so sánh kép: The + comparative... , the + comparative... (The more modern..., the higher...).'
      },
      {
        id: 'eng9-02-q2',
        type: 'multiple_choice',
        prompt: 'Which problems are commonly faced by mega-cities worldwide? (Select all correct answers)',
        options: ['Traffic congestion (traffic jams)', 'Air and noise pollution', 'High housing prices', 'Total lack of internet connectivity'],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Các thành phố lớn đối mặt kẹt xe, ô nhiễm và giá nhà cao. Internet thường rất phổ biến ở thành phố.'
      },
      {
        id: 'eng9-02-q3',
        type: 'true_false',
        prompt: 'The phrase "cost of living" refers to the amount of money needed to sustain a certain standard of living (including housing, food, and taxes).',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo định nghĩa của mức chi phí sinh hoạt (cost of living).'
      },
      {
        id: 'eng9-02-q4',
        type: 'fill_in',
        prompt: 'Complete the sentence with one word: The ________ (nhiều hơn) people use public transport, the less air pollution there will be.',
        correctAnswer: 'more',
        points: 2,
        explanation: 'Cấu trúc so sánh kép: "The more people use...".'
      },
      {
        id: 'eng9-02-q5',
        type: 'essay',
        prompt: 'Propose two realistic green solutions to reduce air pollution and traffic jams in major cities like Hanoi or Ho Chi Minh City.',
        points: 2,
        explanation: 'Gợi ý: 1. Develop public transit systems such as metro subways and electric buses (VinBus); 2. Encourage cycling and walking by building safe sidewalks; 3. Plant more urban trees and create green rooftop gardens.'
      }
    ]
  },

  // ==========================================
  // TOÁN HỌC KHỐI 9
  // ==========================================
  {
    id: 'asg-toan9-01',
    title: 'Đại số 9: Hệ hai phương trình bậc nhất hai ẩn',
    subjectId: 'toan',
    grade: 9,
    chapter: 'Chương 1: Phương trình và Hệ phương trình',
    description: 'Phương pháp cộng đại số, phương pháp thế và giải bài toán thực tế bằng cách lập hệ phương trình.',
    durationMinutes: 45,
    dueDate: '2026-11-26T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-toan-04',
    teacherName: 'Tổ Toán - Tin',
    createdAt: '2026-10-26T15:30:00Z',
    questions: [
      {
        id: 'toan9-01-q1',
        type: 'single_choice',
        prompt: 'Nghiệm (x; y) của hệ phương trình: { x + y = 5; x - y = 1 } là:',
        options: ['(3; 2)', '(2; 3)', '(4; 1)', '(1; 4)'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Cộng hai phương trình ta được: 2x = 6 => x = 3. Thay vào: y = 5 - 3 = 2. Vậy (x; y) = (3; 2).'
      },
      {
        id: 'toan9-01-q2',
        type: 'multiple_choice',
        prompt: 'Những phương pháp nào sau đây là phương pháp đại số chuẩn để giải hệ phương trình bậc nhất hai ẩn? (Chọn các phương án đúng)',
        options: ['Phương pháp thế', 'Phương pháp cộng đại số', 'Phương pháp nhân liên hợp phân thức', 'Phương pháp đặt ẩn phụ'],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Phương pháp thế, cộng đại số và đặt ẩn phụ là các phương pháp chuẩn mực giải hệ phương trình.'
      },
      {
        id: 'toan9-01-q3',
        type: 'true_false',
        prompt: 'Nếu hai đường thẳng biểu diễn hai phương trình trong hệ cắt nhau tại một điểm duy nhất thì hệ phương trình đó có vô số nghiệm.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì nếu hai đường thẳng cắt nhau thì hệ có đúng một nghiệm duy nhất.'
      },
      {
        id: 'toan9-01-q4',
        type: 'fill_in',
        prompt: 'Cho hệ phương trình: { 2x + y = 7; x + y = 4 }. Giá trị của x là bao nhiêu? (Chỉ nhập số)',
        correctAnswer: '3',
        points: 2,
        explanation: 'Lấy (1) trừ (2): (2x + y) - (x + y) = 7 - 4 => x = 3.'
      },
      {
        id: 'toan9-01-q5',
        type: 'essay',
        prompt: 'Giải bài toán bằng cách lập hệ phương trình: "Vừa gà vừa chó, bó lại cho tròn, ba mươi sáu con, một trăm chân chẵn". Tìm số gà và số chó.',
        points: 2,
        explanation: 'Gọi số gà là x, số chó là y (x, y nguyên dương). Ta có hệ: x + y = 36 và 2x + 4y = 100. Nhân phương trình đầu với 2: 2x + 2y = 72. Trừ phương trình: 2y = 28 => y = 14 (con chó). Số gà: x = 36 - 14 = 22 (con gà).'
      }
    ]
  },
  {
    id: 'asg-toan9-02',
    title: 'Hình học 9: Hệ thức lượng trong tam giác vuông & Đường tròn',
    subjectId: 'toan',
    grade: 9,
    chapter: 'Chương 4 & 5: Hệ thức lượng & Đường tròn',
    description: 'Tỉ số lượng giác sin, cos, tan, cot; định lý Py-ta-go, tính chất hai tiếp tuyến cắt nhau và góc nội tiếp đường tròn.',
    durationMinutes: 45,
    dueDate: '2026-11-29T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-toan-04',
    teacherName: 'Tổ Toán - Tin',
    createdAt: '2026-10-27T16:00:00Z',
    questions: [
      {
        id: 'toan9-02-q1',
        type: 'single_choice',
        prompt: 'Trong một tam giác vuông, sin của một góc nhọn bằng tỉ số giữa:',
        options: ['Cạnh đối và cạnh huyền', 'Cạnh kề và cạnh huyền', 'Cạnh đối và cạnh kề', 'Cạnh kề và cạnh đối'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Quy tắc: "Sin đi học" = Cạnh đối / Cạnh huyền.'
      },
      {
        id: 'toan9-02-q2',
        type: 'multiple_choice',
        prompt: 'Những hệ thức lượng nào sau đây đúng đối với tam giác ABC vuông tại A có đường cao AH? (Chọn các phương án đúng)',
        options: [
          'b^2 = a * b\' và c^2 = a * c\'',
          'h^2 = b\' * c\'',
          'a * h = b * c',
          '1/h = 1/b + 1/c'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Hệ thức đúng là 1/h^2 = 1/b^2 + 1/c^2, không phải 1/h.'
      },
      {
        id: 'toan9-02-q3',
        type: 'true_false',
        prompt: 'Góc nội tiếp chắn nửa đường tròn luôn luôn là một góc vuông (bằng 90°).',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo hệ quả định lý góc nội tiếp trong đường tròn.'
      },
      {
        id: 'toan9-02-q4',
        type: 'fill_in',
        prompt: 'Cho tam giác ABC vuông tại A có AB = 3 cm, AC = 4 cm. Độ dài cạnh huyền BC bằng bao nhiêu cm? (Chỉ nhập số)',
        correctAnswer: '5',
        points: 2,
        explanation: 'Theo định lý Pytago: BC = √(3^2 + 4^2) = √(9 + 16) = √25 = 5 cm.'
      },
      {
        id: 'toan9-02-q5',
        type: 'essay',
        prompt: 'Cho đường tròn (O; R) và điểm M nằm ngoài đường tròn. Từ M kẻ hai tiếp tuyến MA và MB với đường tròn (A, B là các tiếp điểm). Chứng minh OM vuông góc với đoạn thẳng AB.',
        points: 2,
        explanation: 'Ta có OA = OB = R (bán kính) => O thuộc đường trung trực của AB. Theo tính chất hai tiếp tuyến cắt nhau: MA = MB => M thuộc đường trung trực của AB. Do đó OM chính là đường trung trực của đoạn thẳng AB, suy ra OM vuông góc với AB.'
      }
    ]
  },

  // ==========================================
  // NGỮ VĂN KHỐI 9
  // ==========================================
  {
    id: 'asg-van9-01',
    title: 'Đọc hiểu Ngữ văn 9: Thơ hiện đại Việt Nam (Đồng chí & Ánh trăng)',
    subjectId: 'van',
    grade: 9,
    chapter: 'Bài 1: Khát vọng hoà bình & Vẻ đẹp người lính',
    description: 'Vẻ đẹp chân thực của tình đồng chí người lính nông dân (Chính Hữu) và lời nhắc nhở ân tình thủy chung qua hình tượng vầng trăng (Nguyễn Duy).',
    durationMinutes: 45,
    dueDate: '2026-11-27T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-van-04',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-26T12:00:00Z',
    questions: [
      {
        id: 'van9-01-q1',
        type: 'single_choice',
        prompt: 'Hình ảnh câu thơ "Đầu súng trăng treo" ở cuối bài thơ "Đồng chí" mang ý nghĩa biểu tượng sâu sắc nào?',
        options: [
          'Sự kết hợp hài hòa giữa hiện thực chiến tranh khốc liệt và chất lãng mạn cách mạng, giữa người chiến sĩ và thi sĩ',
          'Mặt trăng bị vướng vào ngọn súng của người lính',
          'Khẩu súng quá dài chạm tới mặt trăng',
          'Sự nguy hiểm rình rập trong đêm đông giá rét'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Súng là biểu tượng của chiến đấu bảo vệ tổ quốc; Trăng là biểu tượng của hòa bình, thi vị và vẻ đẹp tâm hồn.'
      },
      {
        id: 'van9-01-q2',
        type: 'multiple_choice',
        prompt: 'Cơ sở nào đã hình thành nên tình đồng chí thiêng liêng cao đẹp trong bài thơ của Chính Hữu? (Chọn các phương án đúng)',
        options: [
          'Chung nguồn gốc xuất thân nghèo khó ("quê hương anh nước mặn đồng chua")',
          'Cùng chung mục tiêu, lý tưởng chiến đấu đánh đuổi thực dân Pháp',
          'Cùng chia sẻ những gian lao, thiếu thốn tột cùng nơi chiến hào',
          'Cùng quan hệ họ hàng ruột thịt từ trước'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Tình đồng chí bắt nguồn từ cùng giai cấp xuất thân, cùng lý tưởng cách mạng và đồng cam cộng khổ.'
      },
      {
        id: 'van9-01-q3',
        type: 'true_false',
        prompt: 'Trong bài thơ "Ánh trăng" của Nguyễn Duy, hình ảnh "vầng trăng tròn vành vạnh" tượng trưng cho quá khứ nghĩa tình vẹn nguyên không bao giờ phai nhạt.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Trăng tròn tượng trưng cho thiên nhiên, nghĩa tình thủy chung của năm tháng gian lao thời chiến.'
      },
      {
        id: 'van9-01-q4',
        type: 'fill_in',
        prompt: 'Câu thơ kết bài thơ Ánh trăng: "Ánh trăng im phăng phắc, Đủ cho ta giật ___________".',
        correctAnswer: 'mình',
        points: 2,
        explanation: '"Giật mình" là sự thức tỉnh lương tâm, nhắc nhở đạo lý uống nước nhớ nguồn.'
      },
      {
        id: 'van9-01-q5',
        type: 'essay',
        prompt: 'Viết một đoạn văn ngắn (6-8 câu) phân tích ý nghĩa cái "giật mình" của nhân vật trữ tình ở khổ thơ cuối bài thơ "Ánh trăng".',
        points: 2,
        explanation: 'Đoạn văn cần nêu: "Giật mình" là sự thức tỉnh bất ngờ và sâu sắc. Trăng không trách cứ mà bao dung, lặng lẽ im phăng phắc như một tấm gương soi chiếu vào lương tâm con người. Cái giật mình ấy nhắc nhở con người không được quên quá khứ gian lao, không được phụ bạc những người đã cưu mang mình thời chiến tranh.'
      }
    ]
  },
  {
    id: 'asg-van9-02',
    title: 'Tập làm văn 9: Nghị luận xã hội về Tư tưởng đạo lí & Hiện tượng đời sống',
    subjectId: 'van',
    grade: 9,
    chapter: 'Tập làm văn: Văn nghị luận xã hội',
    description: 'Kỹ năng xây dựng hệ thống luận điểm, luận cứ, dẫn chứng thực tế và lập luận chặt chẽ trong bài văn nghị luận xã hội.',
    durationMinutes: 45,
    dueDate: '2026-11-30T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-van-04',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-28T11:00:00Z',
    questions: [
      {
        id: 'van9-02-q1',
        type: 'single_choice',
        prompt: 'Dàn ý chung của bài văn nghị luận về một tư tưởng đạo lí gồm các bước cơ bản nào theo thứ tự?',
        options: [
          'Giải thích -> Phân tích, chứng minh tính đúng đắn -> Bàn luận, mở rộng và phản đề -> Bài học nhận thức và hành động',
          'Kể chuyện -> Miêu tả ngoại hình -> Nêu cảm xúc',
          'Nêu định nghĩa -> Giải thích công thức -> Kết luận',
          'Trình bày nguyên nhân -> Phân tích hậu quả -> Bỏ qua bài học'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Quy trình chuẩn: Giải thích -> Phân tích/Chứng minh -> Bàn luận/Mở rộng/Phản biện -> Bài học rút ra.'
      },
      {
        id: 'van9-02-q2',
        type: 'multiple_choice',
        prompt: 'Khi đưa dẫn chứng vào bài văn nghị luận xã hội, dẫn chứng cần thỏa mãn những tiêu chí nào? (Chọn các phương án đúng)',
        options: [
          'Dẫn chứng phải xác thực, có thật trong đời sống xã hội',
          'Dẫn chứng tiêu biểu, giàu tính thuyết phục, được nhiều người biết đến',
          'Có phân tích, bình luận ngắn gọn gắn kết với luận điểm',
          'Bịa đặt số liệu hoặc bịa chuyện cá nhân không kiểm chứng'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Dẫn chứng nghị luận phải chính xác, tiêu biểu và có tính khái quát cao.'
      },
      {
        id: 'van9-02-q3',
        type: 'true_false',
        prompt: 'Phần phản đề trong bài nghị luận xã hội là việc phê phán những biểu hiện sai lệch, tiêu cực đi ngược lại với đạo lý tốt đẹp đang bàn luận.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Phản đề giúp bài viết đa chiều, sâu sắc và toàn diện hơn.'
      },
      {
        id: 'van9-02-q4',
        type: 'fill_in',
        prompt: 'Điền từ còn thiếu: Văn nghị luận về một sự việc, hiện tượng đời sống phải nêu rõ được thực trạng, nguyên nhân, tác hại (hoặc lợi ích) và đề xuất ___________ khắc phục.',
        correctAnswer: 'giải pháp',
        points: 2,
        explanation: 'Đề xuất giải pháp là bước then chốt thể hiện năng lực giải quyết vấn đề.'
      },
      {
        id: 'van9-02-q5',
        type: 'essay',
        prompt: 'Viết một đoạn văn ngắn (khoảng 150 chữ) bàn về ý nghĩa của "Lòng kiên trì" trên con đường chinh phục ước mơ của tuổi trẻ.',
        points: 2,
        explanation: 'Đoạn văn cần làm nổi bật: Kiên trì là ý chí quyết tâm vượt qua thử thách, thất bại không nản lòng. Người có lòng kiên trì sẽ tích lũy được kinh nghiệm và từng bước bước tới thành công (như Edison kiên trì thử nghiệm hàng ngàn lần trước khi phát minh ra bóng đèn). Tuổi trẻ cần rèn luyện tính kiên nhẫn từ việc nhỏ mỗi ngày.'
      }
    ]
  },

  // ==========================================
  // KHOA HỌC TỰ NHIÊN KHỐI 9
  // ==========================================
  {
    id: 'asg-khtn9-01',
    title: 'KHTN 9: Kim loại và Dãy hoạt động hóa học của kim loại',
    subjectId: 'khtn',
    grade: 9,
    chapter: 'Chương 1: Kim loại',
    description: 'Tính chất hóa học chung của kim loại, ý nghĩa thực tiễn của dãy hoạt động hóa học (K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au).',
    durationMinutes: 45,
    dueDate: '2026-11-27T21:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-khtn-04',
    teacherName: 'Tổ KHTN',
    createdAt: '2026-10-26T17:00:00Z',
    questions: [
      {
        id: 'khtn9-01-q1',
        type: 'single_choice',
        prompt: 'Kim loại nào sau đây tác dụng mãnh liệt với nước ở nhiệt độ thường tạo thành dung dịch kiềm và giải phóng khí hiđro?',
        options: ['Natri (Na)', 'Đồng (Cu)', 'Sắt (Fe)', 'Bạc (Ag)'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Kim loại kiềm như Na phản ứng mãnh liệt với H2O: 2Na + 2H2O -> 2NaOH + H2.'
      },
      {
        id: 'khtn9-01-q2',
        type: 'multiple_choice',
        prompt: 'Dãy kim loại nào sau đây được xếp theo chiều mức độ hoạt động hóa học giảm dần từ trái sang phải? (Chọn các phương án đúng)',
        options: [
          'K, Mg, Fe, Cu, Ag',
          'Al, Zn, Fe, Pb, H',
          'Cu, Fe, Zn, Al, Mg',
          'Na, Ca, Mg, Al, Zn'
        ],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Dãy chuẩn: K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Hg, Ag, Pt, Au. Phương án 3 xếp ngược chiều tăng dần.'
      },
      {
        id: 'khtn9-01-q3',
        type: 'true_false',
        prompt: 'Kim loại đứng trước Hiđro (H) trong dãy hoạt động hóa học có thể phản ứng với dung dịch HCl/H2SO4 loãng để giải phóng khí H2.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo quy tắc phản ứng hóa học của kim loại với axit thông thường.'
      },
      {
        id: 'khtn9-01-q4',
        type: 'fill_in',
        prompt: 'Nhúng một chiếc đinh sắt (Fe) sạch vào dung dịch đồng sunfat (CuSO4), màu xanh lam của dung dịch nhạt dần và trên đinh sắt xuất hiện một lớp kim loại màu đỏ bám vào là kim loại gì?',
        correctAnswer: 'Đồng',
        points: 2,
        explanation: 'Fe + CuSO4 -> FeSO4 + Cu (đồng sinh ra có màu đỏ).'
      },
      {
        id: 'khtn9-01-q5',
        type: 'essay',
        prompt: 'Ngâm một lá nhôm (Al) trong 200 gam dung dịch CuSO4 8%. Viết phương trình phản ứng hóa học xảy ra và tính khối lượng đồng sinh ra bám trên lá nhôm.',
        points: 2,
        explanation: 'm_CuSO4 = 200 * 8% = 16 gam => n_CuSO4 = 16 / 160 = 0,1 mol. Phương trình: 2Al + 3CuSO4 -> Al2(SO4)3 + 3Cu. Theo phương trình: n_Cu = n_CuSO4 = 0,1 mol => Khối lượng đồng sinh ra: m_Cu = 0,1 * 64 = 6,4 gam.'
      }
    ]
  },
  {
    id: 'asg-khtn9-02',
    title: 'KHTN 9: Khúc xạ ánh sáng & Thấu kính hội tụ - phân kì',
    subjectId: 'khtn',
    grade: 9,
    chapter: 'Chương 4: Ánh sáng & Quang học',
    description: 'Hiện tượng khúc xạ ánh sáng, đường truyền của các tia sáng đặc biệt qua thấu kính hội tụ, phân kì và ứng dụng máy ảnh, kính mắt.',
    durationMinutes: 40,
    dueDate: '2026-11-28T21:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-khtn-04',
    teacherName: 'Tổ KHTN',
    createdAt: '2026-10-27T17:30:00Z',
    questions: [
      {
        id: 'khtn9-02-q1',
        type: 'single_choice',
        prompt: 'Hiện tượng tia sáng bị gãy khúc tại mặt phân cách giữa hai môi trường trong suốt khi truyền xiên góc được gọi là:',
        options: ['Hiện tượng khúc xạ ánh sáng', 'Hiện tượng phản xạ ánh sáng', 'Hiện tượng tán sắc ánh sáng', 'Hiện tượng giao thoa'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Khúc xạ ánh sáng là hiện tượng tia sáng bị gãy khúc tại mặt phân cách giữa hai môi trường trong suốt.'
      },
      {
        id: 'khtn9-02-q2',
        type: 'multiple_choice',
        prompt: 'Những tia sáng nào sau đây là tia sáng đặc biệt khi đi qua thấu kính hội tụ? (Chọn các phương án đúng)',
        options: [
          'Tia tới đi qua quang tâm O thì truyền thẳng',
          'Tia tới song song với trục chính thì tia ló đi qua tiêu điểm F\'',
          'Tia tới đi qua tiêu điểm vật F thì tia ló song song với trục chính',
          'Tia tới bất kỳ đều phản xạ ngược trở lại vuông góc'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: '3 tia sáng đặc biệt giúp xác định ảnh tạo bởi thấu kính hội tụ.'
      },
      {
        id: 'khtn9-02-q3',
        type: 'true_false',
        prompt: 'Mắt cận thị là tật khúc xạ của mắt mà điểm cực viễn nằm ở vô cực, người bị cận thị cần đeo kính phân kì thích hợp để nhìn rõ vật ở xa.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai ở vế: Điểm cực viễn của mắt cận thị ở gần mắt (không ở vô cực). Nhưng vế đeo thấu kính phân kì là đúng.'
      },
      {
        id: 'khtn9-02-q4',
        type: 'fill_in',
        prompt: 'Thấu kính có phần rìa mỏng hơn phần giữa là thấu kính ___________ (hội tụ hay phân kì?).',
        correctAnswer: 'hội tụ',
        points: 2,
        explanation: 'Thấu kính hội tụ có rìa mỏng hơn phần giữa.'
      },
      {
        id: 'khtn9-02-q5',
        type: 'essay',
        prompt: 'Đặt một vật sáng AB hình mũi tên cao 2 cm vuông góc với trục chính của thấu kính hội tụ có tiêu cự f = 12 cm. Vật cách thấu kính d = 24 cm. Hãy dựng ảnh A\'B\', cho biết tính chất của ảnh (thật hay ảo, cùng chiều hay ngược chiều) và tính chiều cao của ảnh.',
        points: 2,
        explanation: 'Vì d = 2f = 24 cm nên ảnh tạo bởi thấu kính là ảnh thật, ngược chiều với vật và có khoảng cách d\' = 24 cm. Chiều cao của ảnh bằng đúng chiều cao của vật: A\'B\' = AB = 2 cm.'
      }
    ]
  },

  // ==========================================
  // LỊCH SỬ VÀ ĐỊA LÍ KHỐI 9
  // ==========================================
  {
    id: 'asg-lsdl9-01',
    title: 'Lịch sử 9: Phong trào cách mạng Việt Nam & Cách mạng Tháng Tám 1945',
    subjectId: 'lich-su-dia-ly',
    grade: 9,
    chapter: 'Lịch sử - Chương 2: Việt Nam từ 1930 đến 1945',
    description: 'Sự ra đời của Đảng Cộng sản Việt Nam (1930), phong trào Xô viết Nghệ - Tĩnh và thắng lợi vĩ đại của Cách mạng Tháng Tám năm 1945.',
    durationMinutes: 45,
    dueDate: '2026-11-28T20:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-lsdl-04',
    teacherName: 'Tổ Sử - Địa',
    createdAt: '2026-10-26T10:00:00Z',
    questions: [
      {
        id: 'lsdl9-01-q1',
        type: 'single_choice',
        prompt: 'Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa vào ngày tháng năm nào?',
        options: ['02/09/1945', '19/08/1945', '30/04/1975', '03/02/1930'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Ngày 2/9/1945 tại Quảng trường Ba Đình lịch sử, Bác Hồ đọc Tuyên ngôn Độc lập.'
      },
      {
        id: 'lsdl9-01-q2',
        type: 'multiple_choice',
        prompt: 'Những nguyên nhân thắng lợi của Cách mạng Tháng Tám năm 1945 là gì? (Chọn các phương án đúng)',
        options: [
          'Sự lãnh đạo tài tình, sáng suốt của Đảng Cộng sản Đông Dương và Chủ tịch Hồ Chí Minh',
          'Tinh thần yêu nước nồng nàn và khối đại đoàn kết toàn dân trong Mặt trận Việt Minh',
          'Thời cơ thuận lợi khi quân phát xít Nhật đầu hàng Đồng minh không điều kiện',
          'Sự giúp đỡ trực tiếp của quân đội đế quốc phương Tây'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Cách mạng do sức mạnh đại đoàn kết dân tộc dưới sự lãnh đạo của Đảng, không có sự trợ giúp của đế quốc phương Tây.'
      },
      {
        id: 'lsdl9-01-q3',
        type: 'true_false',
        prompt: 'Đảng Cộng sản Việt Nam được thành lập ngày 3/2/1930 tại Hội nghị hợp nhất ở Cửu Long (Hương Cảng, Trung Quốc) do đồng chí Nguyễn Ái Quốc chủ trì.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo lịch sử Đảng Cộng sản Việt Nam.'
      },
      {
        id: 'lsdl9-01-q4',
        type: 'fill_in',
        prompt: 'Khởi nghĩa giành chính quyền ở thủ đô Hà Nội thắng lợi rực rỡ vào ngày bao nhiêu của tháng 8 năm 1945? (Chỉ nhập số ngày)',
        correctAnswer: '19',
        points: 2,
        explanation: 'Ngày 19/8/1945 khởi nghĩa thắng lợi ở Hà Nội.'
      },
      {
        id: 'lsdl9-01-q5',
        type: 'essay',
        prompt: 'Phân tích ý nghĩa lịch sử to lớn của cuộc Cách mạng Tháng Tám năm 1945 đối với dân tộc Việt Nam và phong trào giải phóng dân tộc trên thế giới.',
        points: 2,
        explanation: 'Đối với dân tộc: Đập tan xiềng xích nô lệ thực dân Pháp hơn 80 năm và phát xít Nhật, lật đổ chế độ phong kiến nghìn năm, lập nên nước Việt Nam Dân chủ Cộng hòa; đưa nhân dân từ nô lệ thành người làm chủ đất nước. Đối với thế giới: Cổ vũ mạnh mẽ các dân tộc thuộc địa đứng lên đấu tranh tự giải phóng.'
      }
    ]
  },
  {
    id: 'asg-lsdl9-02',
    title: 'Địa lí 9: Địa lí các Vùng kinh tế trọng điểm (Đông Nam Bộ & ĐBSCL)',
    subjectId: 'lich-su-dia-ly',
    grade: 9,
    chapter: 'Địa lí - Chương 3: Sự phân hóa lãnh thổ Việt Nam',
    description: 'Vị trí địa lí, điều kiện tự nhiên, cơ cấu kinh tế năng động của vùng Đông Nam Bộ và vựa lúa Đồng bằng sông Cửu Long.',
    durationMinutes: 40,
    dueDate: '2026-11-29T20:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-lsdl-04',
    teacherName: 'Tổ Sử - Địa',
    createdAt: '2026-10-27T10:00:00Z',
    questions: [
      {
        id: 'lsdl9-02-q1',
        type: 'single_choice',
        prompt: 'Vùng nào sau đây dẫn đầu cả nước về tỉ trọng giá trị sản xuất công nghiệp và thu hút vốn đầu tư trực tiếp nước ngoài (FDI)?',
        options: ['Đông Nam Bộ', 'Tây Nguyên', 'Bắc Trung Bộ', 'Trung du và miền núi Bắc Bộ'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Đông Nam Bộ là đầu tàu kinh tế năng động nhất cả nước, dẫn đầu về công nghiệp và xuất khẩu.'
      },
      {
        id: 'lsdl9-02-q2',
        type: 'multiple_choice',
        prompt: 'Đồng bằng sông Cửu Long giữ vai trò trọng yếu nào đối với an ninh lương thực của cả nước? (Chọn các phương án đúng)',
        options: [
          'Vùng sản xuất lương thực thực phẩm lớn nhất cả nước (chiếm hơn 50% sản lượng lúa)',
          'Vùng xuất khẩu gạo chủ lực của Việt Nam ra thị trường thế giới',
          'Vùng nuôi trồng và xuất khẩu thủy sản lớn nhất (tôm, cá tra, cá ba sa)',
          'Vùng có trữ lượng than đá và quặng sắt lớn nhất'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'ĐBSCL là vựa lúa và vựa thủy hải sản của cả nước. Than và sắt tập trung ở miền Bắc.'
      },
      {
        id: 'lsdl9-02-q3',
        type: 'true_false',
        prompt: 'Thành phố Hồ Chí Minh là trung tâm kinh tế, tài chính, thương mại, dịch vụ và khoa học công nghệ lớn nhất của vùng Đông Nam Bộ và cả nước.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo vị trí và vai trò kinh tế của TP. Hồ Chí Minh.'
      },
      {
        id: 'lsdl9-02-q4',
        type: 'fill_in',
        prompt: 'Ngành công nghiệp khai thác dầu mỏ và khí đốt của nước ta tập trung ở thềm lục địa thuộc tỉnh nào ở vùng Đông Nam Bộ? (Nhập tên tỉnh)',
        correctAnswer: 'Bà Rịa - Vũng Tàu',
        points: 2,
        explanation: 'Bà Rịa - Vũng Tàu là trung tâm khai thác dầu khí hàng đầu của cả nước.'
      },
      {
        id: 'lsdl9-02-q5',
        type: 'essay',
        prompt: 'Hiện tượng biến đổi khí hậu, nước biển dâng và xâm nhập mặn đang đe dọa trực tiếp sản xuất nông nghiệp tại Đồng bằng sông Cửu Long như thế nào? Nêu 2 giải pháp thích ứng.',
        points: 2,
        explanation: 'Tác động: Mùa khô thiếu nước ngọt, ranh mặn vào sâu làm chết lúa, cây ăn trái và thiếu nước sinh hoạt; sạt lở bờ sông bờ biển. Giải pháp: 1. Chuyển đổi mô hình sản xuất thông minh (trồng lúa chịu mặn, chuyển đất nhiễm mặn sang nuôi tôm sinh thái); 2. Xây dựng hệ thống cống đập ngăn mặn trữ ngọt (cống Cái Lớn - Cái Bé) và hồ chứa nước ngọt.'
      }
    ]
  },

  // ==========================================
  // TIN HỌC KHỐI 9
  // ==========================================
  {
    id: 'asg-tin9-01',
    title: 'Tin học 9: Lập trình với ngôn ngữ bậc cao Python - Cấu trúc dữ liệu & Hàm',
    subjectId: 'tin-hoc',
    grade: 9,
    chapter: 'Chủ đề 6: Lập trình với ngôn ngữ bậc cao',
    description: 'Danh sách (List), xử lý chuỗi kí tự (String), định nghĩa hàm tự tạo (def), truyền tham số và giá trị trả về (return).',
    durationMinutes: 45,
    dueDate: '2026-11-26T22:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-tin-03',
    teacherName: 'Tổ Tin học',
    createdAt: '2026-10-26T14:00:00Z',
    questions: [
      {
        id: 'tin9-01-q1',
        type: 'single_choice',
        prompt: 'Trong Python, từ khóa nào sau đây được sử dụng để định nghĩa một hàm tự tạo?',
        options: ['def', 'function', 'func', 'define'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Cú pháp định nghĩa hàm trong Python: def ten_ham(tham_so):'
      },
      {
        id: 'tin9-01-q2',
        type: 'multiple_choice',
        prompt: 'Cho danh sách a = [10, 20, 30, 40]. Những câu lệnh nào sau đây là hợp lệ để thao tác với danh sách trong Python? (Chọn các phương án đúng)',
        options: ['a.append(50)', 'len(a)', 'a.pop()', 'a.addKey("ten")'],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'append, len, pop là các phương thức/hàm thao tác với list. addKey không phải phương thức của list.'
      },
      {
        id: 'tin9-01-q3',
        type: 'true_false',
        prompt: 'Trong Python, chỉ số (index) của phần tử đầu tiên trong một danh sách hoặc một chuỗi luôn luôn bắt đầu từ số 0.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo quy tắc chỉ số 0-indexed trong Python.'
      },
      {
        id: 'tin9-01-q4',
        type: 'fill_in',
        prompt: 'Cho danh sách scores = [8, 9, 7, 10, 6]. Kết quả của hàm len(scores) trả về số nguyên bằng bao nhiêu? (Chỉ nhập số)',
        correctAnswer: '5',
        points: 2,
        explanation: 'len(scores) trả về số lượng phần tử của danh sách (5 phần tử).'
      },
      {
        id: 'tin9-01-q5',
        type: 'practice',
        prompt: 'Viết một hàm Python có tên là `tinh_trung_binh(danh_sach)` nhận vào một danh sách các số thực và trả về giá trị trung bình cộng của các số trong danh sách đó.',
        points: 2,
        explanation: 'Mã nguồn mẫu:\ndef tinh_trung_binh(danh_sach):\n    if len(danh_sach) == 0:\n        return 0\n    return sum(danh_sach) / len(danh_sach)'
      }
    ]
  },
  {
    id: 'asg-tin9-02',
    title: 'Tin học 9: Trí tuệ nhân tạo (AI) & Cuộc cách mạng công nghiệp 4.0',
    subjectId: 'tin-hoc',
    grade: 9,
    chapter: 'Chủ đề 1: Trí tuệ nhân tạo & Xã hội số',
    description: 'Khái niệm Trí tuệ nhân tạo (AI), học máy (Machine Learning), ứng dụng nhận diện khuôn mặt, trợ lý ảo và đạo đức khi sử dụng AI.',
    durationMinutes: 40,
    dueDate: '2026-11-29T22:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-tin-03',
    teacherName: 'Tổ Tin học',
    createdAt: '2026-10-28T14:00:00Z',
    questions: [
      {
        id: 'tin9-02-q1',
        type: 'single_choice',
        prompt: 'Ứng dụng nào dưới đây là ví dụ tiêu biểu của công nghệ Trí tuệ nhân tạo (AI) trong đời sống hàng ngày?',
        options: [
          'Hệ thống mở khóa điện thoại bằng nhận diện khuôn mặt (Face ID) và xe tự hành',
          'Một chiếc máy tính bỏ túi cơ bản cộng trừ nhân chia',
          'Một bóng đèn sợi đốt bật tắt bằng công tắc cơ',
          'Một chiếc quạt gió quay bằng động cơ điện một chiều'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Face ID sử dụng mô hình học sâu (Deep Learning) thị giác máy tính để nhận diện khuôn mặt người dùng.'
      },
      {
        id: 'tin9-02-q2',
        type: 'multiple_choice',
        prompt: 'Những công nghệ cốt lõi nào cấu thành cuộc Cách mạng công nghiệp lần thứ tư (Cách mạng 4.0)? (Chọn các phương án đúng)',
        options: [
          'Trí tuệ nhân tạo (Artificial Intelligence - AI)',
          'Internet vạn vật (Internet of Things - IoT)',
          'Dữ liệu lớn (Big Data) và điện toán đám mây',
          'Động cơ hơi nước chạy bằng than đá'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Động cơ hơi nước là biểu tượng của Cách mạng công nghiệp lần thứ nhất (thế kỉ XVIII).'
      },
      {
        id: 'tin9-02-q3',
        type: 'true_false',
        prompt: 'Học sinh có thể sử dụng các công cụ AI (như ChatGPT, Gemini) để sao chép nguyên văn bài văn mẫu và nộp làm bài kiểm tra cá nhân mà không bị coi là vi phạm liêm chính học thuật.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì sao chép nguyên văn sản phẩm của AI là gian lận học thuật. AI chỉ nên được dùng như công cụ hỗ trợ gợi ý ý tưởng và tự học.'
      },
      {
        id: 'tin9-02-q4',
        type: 'fill_in',
        prompt: 'Thuật ngữ tiếng Anh viết tắt của "Trí tuệ nhân tạo" gồm hai chữ cái in hoa là ___________.',
        correctAnswer: 'AI',
        points: 2,
        explanation: 'AI viết tắt của Artificial Intelligence.'
      },
      {
        id: 'tin9-02-q5',
        type: 'essay',
        prompt: 'Hãy nêu 2 lợi ích vượt trội của AI trong lĩnh vực y tế (chẩn đoán bệnh, phát triển thuốc) và 1 nguy cơ tiềm ẩn về quyền riêng tư dữ liệu khi phát triển AI.',
        points: 2,
        explanation: 'Lợi ích: 1. AI phân tích hình ảnh X-quang/MRI nhanh và chuẩn xác giúp phát hiện sớm ung thư; 2. Tự động hóa sàng lọc hợp chất đẩy nhanh tiến độ bào chế vắc-xin. Nguy cơ: Rò rỉ hồ sơ bệnh án và thông tin sinh trắc học cá nhân nhạy cảm nếu hệ thống máy chủ bị tấn công mạng.'
      }
    ]
  },

  // ==========================================
  // GIÁO DỤC CÔNG DÂN KHỐI 9
  // ==========================================
  {
    id: 'asg-gdcd9-01',
    title: 'GDCD 9: Sống có lý tưởng & Chí công vô tư',
    subjectId: 'gdcd',
    grade: 9,
    chapter: 'Chủ đề 1 & 2: Phẩm chất đạo đức của người công dân',
    description: 'Thấu hiểu ý nghĩa của việc sống có lý tưởng cao đẹp của thanh niên và đức tính chí công vô tư, công bằng, chính trực.',
    durationMinutes: 40,
    dueDate: '2026-11-28T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdcd-04',
    teacherName: 'Tổ GDCD',
    createdAt: '2026-10-27T10:00:00Z',
    questions: [
      {
        id: 'gdcd9-01-q1',
        type: 'single_choice',
        prompt: 'Hành vi nào dưới đây là biểu hiện của người có đức tính chí công vô tư?',
        options: [
          'Giải quyết công việc công bằng, khách quan, không thiên vị người thân hay người quen',
          'Bao che cho lỗi vi phạm của bạn thân vì sợ mất lòng',
          'Nhận quà biếu để ưu tiên xét duyệt học bổng cho người không xứng đáng',
          'Lợi dụng chức vụ tập thể để trục lợi cá nhân'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Chí công vô tư là phẩm chất đạo đức chí công, vô tư lợi, đặt lợi ích chung lên trên hết.'
      },
      {
        id: 'gdcd9-01-q2',
        type: 'multiple_choice',
        prompt: 'Lý tưởng sống cao đẹp của thanh niên Việt Nam trong thời đại ngày nay là gì? (Chọn các phương án đúng)',
        options: [
          'Phấn đấu học tập, rèn luyện vì mục tiêu "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"',
          'Làm chủ khoa học công nghệ, xung kích hội nhập quốc tế để xây dựng và bảo vệ Tổ quốc',
          'Sống có hoài bão, cống hiến tài năng vì sự phồn vinh của quê hương đất nước',
          'Chỉ mưu cầu hưởng thụ cá nhân, coi thường lợi ích cộng đồng'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Sống hưởng thụ ích kỷ là lối sống lệch lạc đi ngược lại lý tưởng thanh niên.'
      },
      {
        id: 'gdcd9-01-q3',
        type: 'true_false',
        prompt: 'Chí công vô tư chỉ cần thiết đối với những người làm cán bộ lãnh đạo, còn người bình thường thì không cần.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì mọi công dân trong cuộc sống gia đình, nhà trường và xã hội đều cần rèn luyện tính chí công vô tư, trung thực, công bằng.'
      },
      {
        id: 'gdcd9-01-q4',
        type: 'fill_in',
        prompt: 'Điền từ còn thiếu vào câu châm ngôn: "Đâu cần thanh niên có, việc gì khó có thanh ___________".',
        correctAnswer: 'niên',
        points: 2,
        explanation: 'Khẩu hiệu truyền thống của tổ chức Đoàn TNCS Hồ Chí Minh.'
      },
      {
        id: 'gdcd9-01-q5',
        type: 'essay',
        prompt: 'Là một học sinh lớp 9 chuẩn bị thi vào lớp 10, em xác định mục tiêu lý tưởng học tập của mình trong năm học này như thế nào? Nêu kế hoạch hành động cụ thể.',
        points: 2,
        explanation: 'Mục tiêu: Đạt kết quả học lực giỏi và thi đỗ vào trường THPT công lập mơ ước. Kế hoạch: Lập thời gian biểu học tập khoa học; hoàn thành bài tập đầy đủ; tích cực hỏi thầy cô những bài khó; rèn luyện sức khỏe và không sa đà vào mạng xã hội.'
      }
    ]
  },
  {
    id: 'asg-gdcd9-02',
    title: 'GDCD 9: Quyền tự do kinh doanh & Nghĩa vụ đóng thuế của công dân',
    subjectId: 'gdcd',
    grade: 9,
    chapter: 'Chủ đề 4: Pháp luật và đời sống kinh tế',
    description: 'Quy định pháp luật về quyền tự do kinh doanh hợp pháp, các mặt hàng cấm kinh doanh và nghĩa vụ nộp thuế vào ngân sách nhà nước.',
    durationMinutes: 40,
    dueDate: '2026-11-30T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdcd-04',
    teacherName: 'Tổ GDCD',
    createdAt: '2026-10-29T10:00:00Z',
    questions: [
      {
        id: 'gdcd9-02-q1',
        type: 'single_choice',
        prompt: 'Mặt hàng nào dưới đây Nhà nước Việt Nam nghiêm cấm sản xuất, tàng trữ, buôn bán và sử dụng?',
        options: ['Ma túy và chất gây nghiện nguy hiểm', 'Lương thực thực phẩm sạch', 'Sách giáo khoa và dụng cụ học sinh', 'Quần áo thời trang'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Ma túy, chất nổ, vũ khí quân dụng là các mặt hàng pháp luật nghiêm cấm kinh doanh.'
      },
      {
        id: 'gdcd9-02-q2',
        type: 'multiple_choice',
        prompt: 'Khoản tiền thuế thu được từ các doanh nghiệp và công dân được Nhà nước sử dụng vào những mục đích nào? (Chọn các phương án đúng)',
        options: [
          'Xây dựng cầu đường, trường học, bệnh viện công và cơ sở hạ tầng',
          'Đảm bảo quốc phòng, an ninh trật tự xã hội và chủ quyền biển đảo',
          'Chi trả lương cho đội ngũ giáo viên, y bác sĩ và công chức nhà nước',
          'Chia đều tiền mặt cho các giám đốc công ty tư nhân'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Thuế là nguồn thu ngân sách để phục vụ lợi ích công cộng và phát triển đất nước.'
      },
      {
        id: 'gdcd9-02-q3',
        type: 'true_false',
        prompt: 'Quyền tự do kinh doanh có nghĩa là công dân thích buôn bán bất kỳ mặt hàng nào, ở bất kỳ đâu cũng được mà không cần đăng ký kinh doanh với cơ quan nhà nước.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì tự do kinh doanh phải tuân thủ đúng quy định pháp luật: phải đăng ký kinh doanh và chỉ được kinh doanh các ngành nghề pháp luật không cấm.'
      },
      {
        id: 'gdcd9-02-q4',
        type: 'fill_in',
        prompt: 'Một khoản nộp bắt buộc mà các tổ chức, hộ kinh doanh và cá nhân phải nộp vào ngân sách nhà nước theo quy định của luật gọi là ___________.',
        correctAnswer: 'thuế',
        points: 2,
        explanation: 'Thuế là nghĩa vụ cơ bản của người kinh doanh đối với quốc gia.'
      },
      {
        id: 'gdcd9-02-q5',
        type: 'essay',
        prompt: 'Em hãy nêu tác hại của hành vi trốn thuế và buôn lậu hàng giả, hàng nhái đối với nền kinh tế đất nước và người tiêu dùng.',
        points: 2,
        explanation: 'Tác hại trốn thuế: Làm thất thoát ngân sách nhà nước, gây bất bình đẳng giữa các doanh nghiệp. Tác hại hàng giả buôn lậu: Hủy hoại các doanh nghiệp làm ăn chân chính; đe dọa trực tiếp sức khỏe, tính mạng người tiêu dùng (thực phẩm bẩn, thuốc giả); làm suy giảm uy tín hàng hóa quốc gia.'
      }
    ]
  },

  // ==========================================
  // CÔNG NGHỆ KHỐI 9
  // ==========================================
  {
    id: 'asg-cn9-01',
    title: 'Công nghệ 9: Lắp đặt mạng điện trong nhà & Thiết bị bảo vệ',
    subjectId: 'cong-nghe',
    grade: 9,
    chapter: 'Chương 1: Mạng điện trong nhà',
    description: 'Sơ đồ nguyên lý, sơ đồ lắp đặt mạch điện chiếu sáng, công tắc 2 cực, công tắc 3 cực và thiết bị đo kiểm điện (vôn kế, ampe kế, đồng hồ vạn năng VOM).',
    durationMinutes: 40,
    dueDate: '2026-11-28T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-cn-04',
    teacherName: 'Tổ Công nghệ',
    createdAt: '2026-10-27T11:30:00Z',
    questions: [
      {
        id: 'cn9-01-q1',
        type: 'single_choice',
        prompt: 'Mạch điện cầu thang trong nhà thường sử dụng hai công tắc loại nào để có thể bật/tắt một bóng đèn từ hai vị trí khác nhau?',
        options: ['Hai công tắc 3 cực', 'Hai công tắc 2 cực', 'Một công tắc 2 cực và một cầu chì', 'Một nút bấm chuông'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Mạch điện đảo chiều cầu thang sử dụng 2 công tắc 3 cực (gồm 1 cực động và 2 cực tĩnh).'
      },
      {
        id: 'cn9-01-q2',
        type: 'multiple_choice',
        prompt: 'Dụng cụ nào sau đây dùng để đo điện áp (hiệu điện thế) trong mạng điện dân dụng? (Chọn các phương án đúng)',
        options: ['Vôn kế (Voltmeter)', 'Đồng hồ vạn năng (VOM) đặt ở thang đo ACV', 'Ampe kế', 'Bút thử điện'],
        correctAnswer: [0, 1],
        points: 2,
        explanation: 'Vôn kế và đồng hồ vạn năng ở thang ACV đo hiệu điện thế. Ampe kế đo dòng điện, bút thử điện kiểm tra rò điện.'
      },
      {
        id: 'cn9-01-q3',
        type: 'true_false',
        prompt: 'Trong sơ đồ lắp đặt mạch điện dân dụng, cầu chì và công tắc luôn luôn được mắc nối tiếp trên dây pha (dây nóng).',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Mắc trên dây pha để ngắt nguồn điện đến tải, đảm bảo an toàn không bị giật điện khi sửa chữa thay bóng đèn.'
      },
      {
        id: 'cn9-01-q4',
        type: 'fill_in',
        prompt: 'Điện áp định mức của mạng điện sinh hoạt gia đình phổ biến tại Việt Nam là bao nhiêu Vôn? (Chỉ nhập số)',
        correctAnswer: '220',
        points: 2,
        explanation: 'Điện lưới dân dụng Việt Nam chuẩn 220V / 50Hz.'
      },
      {
        id: 'cn9-01-q5',
        type: 'practice',
        prompt: 'Trình bày quy trình 5 bước cơ bản khi tiến hành lắp đặt bảng điện nhánh gồm 1 cầu chì, 1 công tắc và 1 ổ cắm điện.',
        points: 2,
        explanation: 'Quy trình 5 bước: 1. Vạch dấu vị trí thiết bị và lỗ luồn dây; 2. Khoan lỗ bảng điện; 3. Nối dây các thiết bị điện (cầu chì, công tắc, ổ cắm); 4. Lắp đặt thiết bị vào bảng điện; 5. Kiểm tra thông mạch và vận hành thử.'
      }
    ]
  },
  {
    id: 'asg-cn9-02',
    title: 'Công nghệ 9: Kỹ thuật nhân giống vô tính cây ăn quả (Chiết & Ghép cành)',
    subjectId: 'cong-nghe',
    grade: 9,
    chapter: 'Chương 2: Trồng cây ăn quả',
    description: 'Ưu nhược điểm của phương pháp chiết cành, ghép cành, ghép mắt chữ T và chăm sóc cây giống trong vườn ươm.',
    durationMinutes: 40,
    dueDate: '2026-11-30T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-cn-04',
    teacherName: 'Tổ Công nghệ',
    createdAt: '2026-10-29T11:30:00Z',
    questions: [
      {
        id: 'cn9-02-q1',
        type: 'single_choice',
        prompt: 'Ưu điểm nổi bật nhất của phương pháp nhân giống vô tính (chiết, ghép cành) so với gieo hạt là gì?',
        options: [
          'Cây giống giữ nguyên được các đặc tính tốt của cây mẹ và nhanh cho thu hoạch quả',
          'Cây con có bộ rễ cọc đâm rất sâu',
          'Tuổi thọ của cây giống luôn cao gấp 10 lần cây gieo hạt',
          'Không đòi hỏi bất kỳ kỹ thuật thao tác nào'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Nhân giống vô tính giúp bảo toàn 100% đặc tính quý của cây mẹ và rút ngắn thời gian ra quả.'
      },
      {
        id: 'cn9-02-q2',
        type: 'multiple_choice',
        prompt: 'Những loại cây ăn quả nào sau đây thường được nhân giống hiệu quả bằng phương pháp chiết cành? (Chọn các phương án đúng)',
        options: ['Cây cam, chanh, bưởi', 'Cây ổi', 'Cây nhãn, vải', 'Cây dừa'],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Cam chanh bưởi, ổi, nhãn vải là cây thân gỗ có tầng sinh mô phát triển dễ ra rễ chiết. Cây dừa thân cột đơn tính không thể chiết cành.'
      },
      {
        id: 'cn9-02-q3',
        type: 'true_false',
        prompt: 'Khi chiết cành, sau khi khoanh vỏ xong phải cạo sạch lớp tượng tầng (màng nhầy màu xanh) trên mặt gỗ để ngăn ngừa vỏ liền sẹo trở lại.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Cạo sạch tầng sinh mô là bước then chốt để kích thích mô sẹo hình thành rễ mới tại mép vỏ trên.'
      },
      {
        id: 'cn9-02-q4',
        type: 'fill_in',
        prompt: 'Hỗn hợp giá thể dùng để bó bầu chiết cành gồm đất mùn tơi xốp trộn với rơm mục hoặc xơ dừa ẩm gọi là bầu ___________.',
        correctAnswer: 'chiết',
        points: 2,
        explanation: 'Bầu chiết cung cấp độ ẩm và dưỡng chất cho rễ con phát triển.'
      },
      {
        id: 'cn9-02-q5',
        type: 'practice',
        prompt: 'Trình bày các bước thực hiện kỹ thuật chiết cành cây bưởi đạt tỷ lệ ra rễ cao nhất (chọn cành, khoanh vỏ, cạo tầng sinh mô, bó bầu, cắt cành chiết).',
        points: 2,
        explanation: 'Các bước: 1. Chọn cành bánh tẻ khỏe mạnh, không sâu bệnh ở tầng tán nhiều nắng; 2. Khoanh vỏ dài gấp 1,5 - 2 lần đường kính cành; 3. Bóc lớp vỏ và dùng sống dao cạo sạch lớp nhờn tượng tầng; để khô 1-2 ngày; 4. Bó bầu bằng giá thể đất mùn trộn xơ dừa bọc nilon trắng buộc chặt 2 đầu; 5. Khi rễ chuyển sang màu vàng ngà thì cắt cành đem ươm vào bầu đất.'
      }
    ]
  },
  // ==========================================
  // ÂM NHẠC KHỐI 9 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-nhac9-01',
    title: 'Bài tập Âm nhạc 9: Đảo phách, Nghịch phách & Bài đọc nhạc số 3',
    subjectId: 'am-nhac',
    grade: 9,
    description: 'Nắm vững hiện tượng đảo phách, nghịch phách trong tiết tấu âm nhạc và kĩ thuật thể hiện điểm nhấn bất thường của giai điệu.',
    durationMinutes: 15,
    dueDate: '2026-12-18T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-nhac-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-25T09:30:00Z',
    questions: [
      {
        id: 'nhac9-01-q1',
        type: 'single_choice',
        prompt: 'Hiện tượng "đảo phách" (syncopation) trong âm nhạc xảy ra khi nào?',
        options: [
          'Khi một âm bắt đầu ngân từ phách nhẹ (hoặc phần nhẹ của phách) kéo dài sang phách mạnh tiếp theo làm dịch chuyển điểm nhấn tự nhiên',
          'Khi tất cả các nốt nhạc đều bị hạ thấp một quãng tám',
          'Khi người biểu diễn chơi lặp lại 2 lần một đoạn nhạc',
          'Khi tốc độ bài hát được tăng nhanh gấp đôi'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Đảo phách là hiện tượng âm vang từ phách nhẹ ngân qua phách mạnh làm trọng âm dịch chuyển.'
      },
      {
        id: 'nhac9-01-q2',
        type: 'multiple_choice',
        prompt: 'Những đặc điểm nào sau đây phân biệt hiện tượng "nghịch phách" với đảo phách? (Chọn các phương án đúng)',
        options: [
          'Nghịch phách xảy ra khi nốt nhạc vang lên ở phần nhẹ của phách nhưng ở phách mạnh (hoặc phần mạnh) liền kề là dấu lặng',
          'Âm thanh không bị kéo dài xuyên qua phách mạnh mà bị ngắt bởi dấu lặng',
          'Tạo nên cảm giác hụt hẫng, giật nảy sôi nổi đặc trưng trong nhạc Jazz, Pop',
          'Làm toàn bộ nốt nhạc biến mất khỏi khuông nhạc'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Nghịch phách có dấu lặng ở vị trí phách mạnh tạo nhịp nảy giật đặc trưng.'
      },
      {
        id: 'nhac9-01-q3',
        type: 'true_false',
        prompt: 'Giọng Son trưởng (G-dur) có một dấu hóa duy nhất trên hóa biểu là nốt Pha thăng (F#).',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Giọng Son trưởng có một dấu thăng tại nốt Pha.'
      },
      {
        id: 'nhac9-01-q4',
        type: 'fill_in',
        prompt: 'Dấu nối dùng để liên kết hai hay nhiều nốt nhạc có cùng cao độ để tăng thêm trường ________ của nốt.',
        correctAnswer: 'độ',
        points: 2,
        explanation: 'Dấu nối liên kết trường độ các nốt cùng cao độ.'
      },
      {
        id: 'nhac9-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu cảm nhận sau khi nghe bài hát "Mùa xuân nho nhỏ" (Nhạc: Trần Hoàn, Thơ: Thanh Hải) và cho biết thông điệp về lẽ sống cống hiến âm thầm cho quê hương đất nước.',
        points: 2,
        explanation: 'Học sinh trình bày: Nét nhạc tha thiết đằm thắm mang âm hưởng dân ca xứ Huế; thông điệp mỗi người nguyện làm một đóa hoa, một tiếng chim, một mùa xuân nhỏ góp vào mùa xuân lớn của non sông đất nước mà không đòi hỏi đền đáp.'
      }
    ]
  },
  {
    id: 'asg-nhac9-02',
    title: 'Bài tập Âm nhạc 9: Ca khúc Cách mạng Việt Nam & Thể loại Hợp xướng',
    subjectId: 'am-nhac',
    grade: 9,
    description: 'Nghiên cứu hình thức ca khúc cách mạng thời kì kháng chiến chống Mỹ và nghệ thuật hòa âm hợp xướng nhiều bè (SATB).',
    durationMinutes: 15,
    dueDate: '2026-12-23T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-nhac-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-26T09:30:00Z',
    questions: [
      {
        id: 'nhac9-02-q1',
        type: 'single_choice',
        prompt: 'Dàn hợp xướng hỗn hợp tiêu chuẩn (Mixed Choir) thường bao gồm 4 bè cơ bản nào sau đây?',
        options: [
          'Soprano (Nữ cao), Alto (Nữ trầm), Tenor (Nam cao), Bass (Nam trầm)',
          'Guitar, Trống, Piano, Sáo',
          'Đơn ca, Song ca, Tam ca, Tốp ca',
          'Kèn trumpet, Kèn trombone, Kèn tuba, Kèn cor'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Bốn bè giọng tiêu chuẩn của hợp xướng hỗn hợp là SATB (Soprano, Alto, Tenor, Bass).'
      },
      {
        id: 'nhac9-02-q2',
        type: 'multiple_choice',
        prompt: 'Những ca khúc cách mạng nào sau đây gắn liền với cuộc kháng chiến giải phóng dân tộc thống nhất non sông? (Chọn các phương án đúng)',
        options: [
          'Bài ca hy vọng (Nhạc sĩ Văn Ký)',
          'Giải phóng miền Nam (Nhạc sĩ Huỳnh Minh Siêng)',
          'Đất nước trọn niềm vui (Nhạc sĩ Hoàng Hà)',
          'Bài hát thiếu nhi Chú ếch con'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Bài ca hy vọng, Giải phóng miền Nam và Đất nước trọn niềm vui là các tác phẩm cách mạng tiêu biểu.'
      },
      {
        id: 'nhac9-02-q3',
        type: 'true_false',
        prompt: 'Hát Acappella là hình thức biểu diễn thanh nhạc của dàn đồng ca hoàn toàn không có nhạc cụ đệm theo.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Acappella là nghệ thuật hát không dùng nhạc cụ đệm.'
      },
      {
        id: 'nhac9-02-q4',
        type: 'fill_in',
        prompt: 'Người đứng trước dàn nhạc hoặc dàn hợp xướng dùng cử chỉ tay và đũa để điều khiển tốc độ và sắc thái gọi là người chỉ ________ (hoặc nhạc trưởng).',
        correctAnswer: 'huy',
        points: 2,
        explanation: 'Chỉ huy (Conductor).'
      },
      {
        id: 'nhac9-02-q5',
        type: 'essay',
        prompt: 'Trình bày ý nghĩa lịch sử và sức sống mãnh liệt của ca khúc "Như có Bác trong ngày đại thắng" (Nhạc sĩ Phạm Tuyên) vào thời khắc non sông liền một dải 30/4/1975.',
        points: 2,
        explanation: 'Học sinh trình bày: Tác phẩm được viết trong đêm 28/4/1975 đón đầu ngày toàn thắng; ca từ ngắn gọn súc tích dễ thuộc dễ nhớ, hòa cùng niềm hân hoan vỡ òa của hàng chục triệu người dân Việt Nam mừng ngày hòa bình độc lập.'
      }
    ]
  },
  // ==========================================
  // MĨ THUẬT KHỐI 9 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-mt9-01',
    title: 'Bài tập Mĩ thuật 9: Mĩ thuật Hiện đại Việt Nam - Tranh Sơn mài & Tranh Lụa',
    subjectId: 'mi-thuat',
    grade: 9,
    description: 'Tìm hiểu các chất liệu hội họa truyền thống đỉnh cao của Việt Nam (Sơn mài, Tranh lụa) và các danh họa khóa Tô Ngọc Vân, Nguyễn Gia Trí, Nguyễn Phan Chánh.',
    durationMinutes: 15,
    dueDate: '2026-12-21T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-mt-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-27T09:30:00Z',
    questions: [
      {
        id: 'mt9-01-q1',
        type: 'single_choice',
        prompt: 'Danh họa nào sau đây được tôn vinh là bậc thầy khai sáng và đưa nghệ thuật Tranh lụa Việt Nam vươn tầm thế giới qua các tác phẩm "Chơi ô ăn quan", "Rửa rau cầu ao"?',
        options: [
          'Họa sĩ Nguyễn Phan Chánh',
          'Họa sĩ Nguyễn Gia Trí',
          'Họa sĩ Tô Ngọc Vân',
          'Họa sĩ Bùi Xuân Phái'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Họa sĩ Nguyễn Phan Chánh là bậc thầy vĩ đại của tranh lụa hiện đại Việt Nam.'
      },
      {
        id: 'mt9-01-q2',
        type: 'multiple_choice',
        prompt: 'Những chất liệu đặc trưng nào sau đây được các họa sĩ sơn mài Việt Nam (như Nguyễn Gia Trí) tìm tòi và đưa vào tác phẩm tranh sơn mài nghệ thuật? (Chọn các phương án đúng)',
        options: [
          'Sơn ta (nhựa cây sơn Phú Thọ)',
          'Vàng quỳ và Bạc thếp',
          'Vỏ trứng vịt cẩn chìm',
          'Màu acrylic công nghiệp dạng xịt'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Sơn ta, vàng quỳ, bạc thếp và vỏ trứng là những chất liệu cốt lõi tạo nên vẻ đẹp sâu thẳm lộng lẫy của tranh sơn mài.'
      },
      {
        id: 'mt9-01-q3',
        type: 'true_false',
        prompt: 'Kĩ thuật then chốt phân biệt tranh sơn mài với các loại tranh khác là công đoạn "mài" tranh dưới nước để lộ ra các tầng lớp màu ẩn sâu bên dưới.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Vẽ sơn mài vừa vẽ vừa mài trong nước phẳng mịn bóng loáng tạo hiệu ứng lung linh kì ảo.'
      },
      {
        id: 'mt9-01-q4',
        type: 'fill_in',
        prompt: 'Tác phẩm sơn mài "Vườn xuân Trung Nam Bắc" được công nhận là Bảo vật quốc gia của Việt Nam do danh họa Nguyễn Gia ________ sáng tác.',
        correctAnswer: 'trí',
        points: 2,
        explanation: 'Họa sĩ Nguyễn Gia Trí.'
      },
      {
        id: 'mt9-01-q5',
        type: 'essay',
        prompt: 'Em hãy viết một đoạn văn ngắn (5-7 dòng) phân tích vẻ đẹp thuần khiết, dịu dàng của người phụ nữ Việt Nam qua bức tranh sơn dầu nổi tiếng "Thiếu nữ bên hoa huệ" của danh họa Tô Ngọc Vân.',
        points: 2,
        explanation: 'Học sinh phân tích: Bố cục hình tam giác cân đối mềm mại; thiếu nữ mặc áo dài trắng tinh khôi nghiêng đầu bên bình hoa huệ trắng thơm ngát; ánh sáng dịu nhẹ tôn lên nét duyên dáng, kín đáo và thanh tao của người con gái Hà thành.'
      }
    ]
  },
  {
    id: 'asg-mt9-02',
    title: 'Bài tập Mĩ thuật 9: Thiết kế Nội thất & Bố trí không gian góc học tập',
    subjectId: 'mi-thuat',
    grade: 9,
    description: 'Ứng dụng mĩ thuật vào đời sống: nguyên lí thiết kế nội thất, công năng sử dụng, chiếu sáng tự nhiên và cách phối màu tạo cảm hứng học tập tích cực.',
    durationMinutes: 15,
    dueDate: '2026-12-25T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-mt-01',
    teacherName: 'CTổ Nghệ thuật',
    createdAt: '2026-10-28T09:30:00Z',
    questions: [
      {
        id: 'mt9-02-q1',
        type: 'single_choice',
        prompt: 'Khi bố trí bàn học trong phòng riêng, vị trí đón ánh sáng tự nhiên tốt nhất cho mắt học sinh là gì?',
        options: [
          'Gần cửa sổ, hướng ánh sáng tự nhiên chiếu từ phía bên tay trái vào (đối với người thuận tay phải) để không bị bóng sấp',
          'Quay mặt vào góc tối sâu trong phòng không cần ánh sáng',
          'Đặt ngay đối diện trước luồng gió máy lạnh thổi trực diện vào gáy',
          'Đặt bàn học dưới gầm giường tầng không có bóng đèn chiếu sáng'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Ánh sáng chiếu từ bên trái đối với người viết tay phải giúp trang vở không bị tay chắn sấp bóng.'
      },
      {
        id: 'mt9-02-q2',
        type: 'multiple_choice',
        prompt: 'Những tiêu chuẩn căn bản của một góc học tập lí tưởng theo nguyên tắc công thái học (Ergonomics) gồm: (Chọn các phương án đúng)',
        options: [
          'Chiều cao bàn ghế phù hợp với vóc dáng, giúp ngồi thẳng lưng không bị gù',
          'Hệ thống chiếu sáng đạt chuẩn (300 - 500 lux), không chói lóa',
          'Sắp xếp kệ sách và đồ dùng ngăn nắp, dễ lấy dễ cất',
          'Đặt nhiều loa công suất lớn phát nhạc rock khi làm bài thi'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Tư thế ngồi chuẩn, ánh sáng tốt và ngăn nắp là ba tiêu chuẩn công thái học thiết yếu.'
      },
      {
        id: 'mt9-02-q3',
        type: 'true_false',
        prompt: 'Các gam màu trung tính nhẹ nhàng như xanh lá cây pastel, xanh da trời nhạt hoặc màu kem sữa thường giúp tăng khả năng tập trung và giảm mỏi mắt khi học bài.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo tâm lí học màu sắc trong thiết kế nội thất trường học.'
      },
      {
        id: 'mt9-02-q4',
        type: 'fill_in',
        prompt: 'Bản vẽ chiếu thẳng từ trên trần nhà xuống thể hiện vị trí sắp đặt các đồ đạc trong căn phòng gọi là bản vẽ mặt bằng nội ________.',
        correctAnswer: 'thất',
        points: 2,
        explanation: 'Bản vẽ mặt bằng nội thất (Floor plan).'
      },
      {
        id: 'mt9-02-q5',
        type: 'practice',
        prompt: 'Em hãy lập bản kế hoạch thiết kế cải tạo lại góc học tập của chính mình: Nêu giải pháp tận dụng ánh sáng tự nhiên, cách chọn màu sơn tường và bố trí cây xanh để bàn học trở nên thoáng đãng, kích thích sáng tạo.',
        points: 2,
        explanation: 'Học sinh trình bày: 1. Đặt bàn học cạnh cửa sổ lấy gió trời mát mẻ; 2. Màu sơn tường trắng sữa hoặc xanh nhạt tạo sự thông thoáng; 3. Bố trí giá sách gắn tường tiết kiệm diện tích; 4. Đặt một chậu cây xanh nhỏ (sen đá, kim ngân) trên bàn lọc không khí và thư giãn mắt.'
      }
    ]
  },
  // ==========================================
  // GIÁO DỤC THỂ CHẤT KHỐI 9 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-gdtc9-01',
    title: 'Bài tập Giáo dục thể chất 9: Kĩ thuật nhảy xa kiểu ngồi',
    subjectId: 'giao-duc-the-chat',
    grade: 9,
    description: 'Bốn giai đoạn kĩ thuật nhảy xa kiểu ngồi: Chạy đà chính xác từng bước, Giậm nhảy trúng ván, Bay trên không kiểu ngồi và Tiếp đất an toàn.',
    durationMinutes: 15,
    dueDate: '2026-12-18T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdtc-01',
    teacherName: 'Tổ GDTC',
    createdAt: '2026-10-25T11:45:00Z',
    questions: [
      {
        id: 'gdtc9-01-q1',
        type: 'single_choice',
        prompt: 'Trong nhảy xa kiểu ngồi, lỗi vi phạm quy định nào sau đây khiến lượt nhảy bị trọng tài tuyên bố phạm quy (không tính thành tích)?',
        options: [
          'Mũi giày giậm nhảy đè lên vạch chỉ giới hạn phía trên ván giậm nhảy (vạch đất sét)',
          'Giậm nhảy bằng chân thuận',
          'Chạy đà tăng tốc đều đặn',
          'Rơi xuống hố cát bằng cả hai chân cùng lúc'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Chân giậm đè quá vạch giới hạn trên ván giậm là lỗi phạm quy kinh điển trong nhảy xa.'
      },
      {
        id: 'gdtc9-01-q2',
        type: 'multiple_choice',
        prompt: 'Giai đoạn trên không của kĩ thuật nhảy xa kiểu ngồi có những đặc điểm nào? (Chọn các phương án đúng)',
        options: [
          'Sau khi giậm nhảy, chân giậm co lại đưa nhanh ra trước ngang hàng với chân lăng',
          'Hai đùi nâng cao ép sát ngực giống như tư thế ngồi xổm trên không',
          'Hai tay đánh từ trên xuống dưới - ra sau để chuẩn bị tiếp đất',
          'Thân người duỗi thẳng hoàn toàn như tư thế đứng chào cờ'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Co chân, ép đùi sát ngực tạo tư thế ngồi và đánh tay chuẩn bị vươn chân tiếp đất.'
      },
      {
        id: 'gdtc9-01-q3',
        type: 'true_false',
        prompt: 'Khi tiếp đất trong hố cát, nếu đấu thủ ngã người về phía sau và hai tay chống xuống cát ở phía sau gót chân thì thành tích sẽ được đo từ điểm chạm cát gần ván giậm nhất (chính là vết tay chống).',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo luật điền kinh quốc tế (World Athletics), thành tích đo từ vết chạm gần ván nhảy nhất.'
      },
      {
        id: 'gdtc9-01-q4',
        type: 'fill_in',
        prompt: 'Ván gỗ chôn ngang mặt đường chạy để vận động viên đặt chân phát lực bật nhảy gọi là ván ________ nhảy.',
        correctAnswer: 'giậm',
        points: 2,
        explanation: 'Ván giậm nhảy (Take-off board).'
      },
      {
        id: 'gdtc9-01-q5',
        type: 'essay',
        prompt: 'Tại sao việc đo và xác định đà chính xác trước khi thi đấu nhảy xa lại đóng vai trò quyết định đến thành tích và tránh phạm quy ván giậm?',
        points: 2,
        explanation: 'Học sinh phân tích: Đo đà chuẩn xác giúp bước chạy có nhịp điệu ổn định, đạt tốc độ cực đại đúng thời điểm giậm nhảy và đặt đúng vị trí chân giậm trên ván mà không bị thừa hay thiếu bước.'
      }
    ]
  },
  {
    id: 'asg-gdtc9-02',
    title: 'Bài tập Giáo dục thể chất 9: Kĩ thuật đá bóng bằng mu trong bàn chân',
    subjectId: 'giao-duc-the-chat',
    grade: 9,
    description: 'Năm giai đoạn kĩ thuật đá bóng: Chạy đà chếch 45 độ, Đặt chân trụ ngang bóng, Vung chân lăng, Điểm tiếp xúc mu trong và Theo đà bóng bay.',
    durationMinutes: 15,
    dueDate: '2026-12-23T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdtc-01',
    teacherName: 'Tổ GDTC',
    createdAt: '2026-10-26T11:45:00Z',
    questions: [
      {
        id: 'gdtc9-02-q1',
        type: 'single_choice',
        prompt: 'Trong kĩ thuật đá bóng bằng mu trong bàn chân, vị trí đặt chân trụ lí tưởng nhất so với quả bóng là:',
        options: [
          'Cách mép bóng khoảng 15 - 20cm, mũi bàn chân trụ hướng thẳng về mục tiêu cần đá tới',
          'Đặt chân trụ ngay phía sau bóng 50cm',
          'Đặt chân trụ đè hẳn lên trên quả bóng',
          'Mũi chân trụ quay ngược 180 độ về phía sau'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Chân trụ đặt ngang bóng cách 15-20cm, mũi chân hướng mục tiêu là vị trí phát lực chuẩn xác nhất.'
      },
      {
        id: 'gdtc9-02-q2',
        type: 'multiple_choice',
        prompt: 'Kĩ thuật đá bóng bằng mu trong bàn chân thường được vận dụng hiệu quả trong những tình huống nào? (Chọn các phương án đúng)',
        options: [
          'Chuyền bóng cự li dài và bổng cho đồng đội vượt tuyến',
          'Sút cầu môn tạo quỹ đạo bóng xoáy vòng cung (cầu vồng) khó bắt',
          'Đá phạt góc và đá phạt trực tiếp hàng rào',
          'Bắt bóng bằng hai tay ngoài vòng cấm địa'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Đá mu trong tạo đường bóng xoáy bổng rất lợi hại trong chuyền dài, sút xa và đá phạt.'
      },
      {
        id: 'gdtc9-02-q3',
        type: 'true_false',
        prompt: 'Nếu điểm tiếp xúc của mu trong bàn chân vào đúng tâm phía dưới của quả bóng thì bóng sẽ bay bổng lên cao.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo nguyên lí điểm tiếp xúc phát lực trong bóng đá.'
      },
      {
        id: 'gdtc9-02-q4',
        type: 'fill_in',
        prompt: 'Chân không trực tiếp đá bóng mà giữ thăng bằng nâng đỡ toàn bộ trọng lượng cơ thể được gọi là chân ________.',
        correctAnswer: 'trụ',
        points: 2,
        explanation: 'Chân trụ.'
      },
      {
        id: 'gdtc9-02-q5',
        type: 'essay',
        prompt: 'Em hãy nêu cảm nhận về tinh thần fair-play (chơi đẹp, tôn trọng đối thủ và trọng tài) trong môn thể thao vua bóng đá.',
        points: 2,
        explanation: 'Học sinh trình bày: Fair-play là cốt lõi của thể thao chân chính; chiến thắng vẻ vang nhất là chiến thắng bằng tài năng và tinh thần cao thượng; tôn trọng luật chơi, không đá xấu bạo lực và biết đỡ đối thủ đứng dậy khi va chạm.'
      }
    ]
  },
  // ==========================================
  // HOẠT ĐỘNG TRẢI NGHIỆM KHỐI 9 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-hdtn9-01',
    title: 'Bài tập Hoạt động trải nghiệm 9: Định hướng Chọn trường THPT & Hướng nghiệp',
    subjectId: 'hoat-dong-trai-nghiem',
    grade: 9,
    description: 'Xác định năng lực học tập, điều kiện gia đình để lựa chọn nguyện vọng thi vào lớp 10 THPT, trường chuyên hoặc học nghề phù hợp.',
    durationMinutes: 15,
    dueDate: '2026-12-19T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-hdtn-01',
    teacherName: 'Tổ Hoạt động Trải nghiệm',
    createdAt: '2026-10-25T11:45:00Z',
    questions: [
      {
        id: 'hdtn9-01-q1',
        type: 'single_choice',
        prompt: 'Khi đứng trước kì thi tuyển sinh vào lớp 10 THPT, nguyên tắc hàng đầu giúp học sinh lớp 9 chọn đúng trường phù hợp là gì?',
        options: [
          'Đánh giá sát năng lực học tập thực tế của bản thân, đối chiếu điểm chuẩn 3 năm gần nhất của các trường và cân nhắc khoảng cách đi lại',
          'Đăng kí theo trường bạn thân chọn mà không cần quan tâm điểm số của mình',
          'Chỉ chọn trường có điểm chuẩn cao ngất ngưởng dù học lực trung bình',
          'Để người khác quyết định hoàn toàn thay mình'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Chọn trường phải căn cứ vào năng lực thực tế, điểm chuẩn nhiều năm và điều kiện hoàn cảnh cá nhân.'
      },
      {
        id: 'hdtn9-01-q2',
        type: 'multiple_choice',
        prompt: 'Sau khi tốt nghiệp lớp 9 THCS, học sinh có những ngã rẽ hướng nghiệp tích cực nào theo chương trình phân luồng giáo dục quốc gia? (Chọn các phương án đúng)',
        options: [
          'Học tiếp lên lớp 10 trường THPT công lập hoặc tư thục',
          'Học tại Trung tâm Giáo dục Nghề nghiệp - Giáo dục Thường xuyên (vừa học văn hóa vừa học nghề)',
          'Học hệ trung cấp nghề chất lượng cao (mô hình 9+)',
          'Bỏ học tụ tập đua xe lêu lổng'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Vào THPT, học GDTX hoặc học nghề hệ 9+ đều là những con đường lập thân, lập nghiệp rộng mở.'
      },
      {
        id: 'hdtn9-01-q3',
        type: 'true_false',
        prompt: 'Mô hình vừa học văn hóa vừa học nghề (hệ 9+) giúp học sinh sau 3 năm vừa có bằng tốt nghiệp THPT vừa có chứng chỉ nghề để sớm gia nhập thị trường lao động.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo chủ trương phân luồng đào tạo nghề của Bộ Giáo dục và Đào tạo.'
      },
      {
        id: 'hdtn9-01-q4',
        type: 'fill_in',
        prompt: 'Quy trình hướng dẫn và hỗ trợ học sinh nhận biết năng khiếu để chọn đúng ngành nghề tương lai gọi là tư vấn hướng ________.',
        correctAnswer: 'nghiệp',
        points: 2,
        explanation: 'Tư vấn hướng nghiệp (Career counseling).'
      },
      {
        id: 'hdtn9-01-q5',
        type: 'essay',
        prompt: 'Em hãy viết một bản kế hoạch ôn thi vào lớp 10 cho chính mình: Mục tiêu trường THPT hướng tới, kế hoạch phân bổ thời gian ôn tập 3 môn Toán, Văn, Tiếng Anh và chế độ giữ gìn sức khỏe trước kì thi.',
        points: 2,
        explanation: 'Học sinh nêu: Mục tiêu cụ thể (tên trường THPT tại địa phương); Thời gian biểu ôn tập khoa học; Giải pháp bổ sung lỗ hổng kiến thức từng môn; Giữ gìn sức khỏe (ngủ trước 23h, tập thể dục nhẹ, ăn uống đủ chất).'
      }
    ]
  },
  {
    id: 'asg-hdtn9-02',
    title: 'Bài tập Hoạt động trải nghiệm 9: Kĩ năng Giải quyết Xung đột & Tự khẳng định bản thân',
    subjectId: 'hoat-dong-trai-nghiem',
    grade: 9,
    description: 'Rèn luyện kĩ năng đàm phán thương lượng bất đồng, tư duy phản biện, bảo vệ quan điểm chính đáng và xây dựng hình ảnh bản thân tích cực.',
    durationMinutes: 15,
    dueDate: '2026-12-24T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-hdtn-01',
    teacherName: 'Tổ Hoạt động Trải nghiệm',
    createdAt: '2026-10-26T11:45:00Z',
    questions: [
      {
        id: 'hdtn9-02-q1',
        type: 'single_choice',
        prompt: 'Khi xảy ra mâu thuẫn tranh cãi gay gắt trong làm việc nhóm, cách ứng xử văn minh và đem lại hiệu quả tốt nhất là:',
        options: [
          'Các bên cùng lắng nghe quan điểm của nhau, tập trung vào giải quyết vấn đề chứ không công kích cá nhân, tìm điểm chung để hòa giải',
          'Ai to tiếng hơn và đe dọa vũ lực thì người đó thắng',
          'Lập tức chia bè phái tẩy chay người bất đồng quan điểm',
          'Bỏ dở bài tập nhóm giữa chừng'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Tập trung vào vấn đề, lắng nghe và thương lượng hòa giải là nguyên tắc giải quyết mâu thuẫn đỉnh cao.'
      },
      {
        id: 'hdtn9-02-q2',
        type: 'multiple_choice',
        prompt: 'Để xây dựng một hình ảnh cá nhân tích cực, tự tin và được bạn bè, thầy cô tin yêu, học sinh cần rèn luyện những đức tính nào? (Chọn các phương án đúng)',
        options: [
          'Trung thực, giữ lời hứa và có tinh thần trách nhiệm cao',
          'Sẵn sàng giúp đỡ bạn bè và khiêm tốn học hỏi',
          'Tác phong gọn gàng, nói năng lịch sự nhã nhặn',
          'Khoe khoang của cải và coi thường người khác'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Trung thực, khiêm tốn, trách nhiệm và lịch thiệp tạo nên nhân cách uy tín của người học sinh.'
      },
      {
        id: 'hdtn9-02-q3',
        type: 'true_false',
        prompt: 'Tự tin khẳng định bản thân có nghĩa là luôn cho rằng mình đúng trong mọi trường hợp và không bao giờ tiếp thu ý kiến đóng góp của người khác.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai. Tự tin chân chính là dám chịu trách nhiệm, biết rõ giá trị của mình nhưng luôn cầu thị, lắng nghe để hoàn thiện.'
      },
      {
        id: 'hdtn9-02-q4',
        type: 'fill_in',
        prompt: 'Khả năng phân tích độc lập, xem xét vấn đề dưới nhiều góc độ khách quan trước khi đưa ra kết luận gọi là tư duy phản ________.',
        correctAnswer: 'biện',
        points: 2,
        explanation: 'Tư duy phản biện (Critical thinking).'
      },
      {
        id: 'hdtn9-02-q5',
        type: 'essay',
        prompt: 'Em hãy chia sẻ một bài học kinh nghiệm sâu sắc nhất mà em đã rút ra được qua 4 năm học tập và sinh hoạt dưới mái trường THCS Mỹ Hòa thân yêu.',
        points: 2,
        explanation: 'Học sinh chia sẻ chân thành: Bài học về tình thầy trò thiêng liêng, tình bạn bè gắn bó tri kỉ; bài học về sự nỗ lực kiên trì vượt khó và lòng biết ơn đối với cha mẹ, thầy cô.'
      }
    ]
  },
  // ==========================================
  // GIÁO DỤC ĐỊA PHƯƠNG KHỐI 9 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-gddp9-01',
    title: 'Bài tập Giáo dục địa phương 9: Quy hoạch Phát triển Kinh tế - Xã hội An Giang',
    subjectId: 'giao-duc-dia-phuong',
    grade: 9,
    description: 'Quy hoạch tỉnh An Giang thời kì 2021-2030, tầm nhìn 2050: phát triển kinh tế biên mậu, du lịch tâm linh sinh thái và chuyển đổi số.',
    durationMinutes: 15,
    dueDate: '2026-12-20T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gddp-01',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-25T12:00:00Z',
    questions: [
      {
        id: 'gddp9-01-q1',
        type: 'single_choice',
        prompt: 'Cửa khẩu quốc tế đường bộ và đường sông lớn nhất của tỉnh An Giang giao thương trực tiếp với Vương quốc Campuchia là:',
        options: [
          'Cửa khẩu quốc tế Tịnh Biên và Cửa khẩu quốc tế Vĩnh Xương',
          'Cửa khẩu quốc tế Mộc Bài',
          'Cửa khẩu quốc tế Hữu Nghị',
          'Cửa khẩu quốc tế Cầu Treo'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Tịnh Biên (đường bộ) và Vĩnh Xương (đường thủy sông Tiền) là hai cửa khẩu quốc tế chiến lược của An Giang.'
      },
      {
        id: 'gddp9-01-q2',
        type: 'multiple_choice',
        prompt: 'Định hướng phát triển kinh tế du lịch trọng điểm của An Giang đến năm 2030 gồm những loại hình nào? (Chọn các phương án đúng)',
        options: [
          'Du lịch văn hóa tâm linh (Miếu Bà Chúa Xứ Núi Sam, Núi Cấm)',
          'Du lịch sinh thái sông nước ngập mặn ngập ngọt (Rừng tràm Trà Sư, Cù lao Giêng)',
          'Du lịch di sản khảo cổ học Óc Eo - Ba Thê',
          'Du lịch trượt tuyết mùa đông'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Tâm linh, sinh thái sông nước và di sản văn hóa là trụ cột du lịch An Giang.'
      },
      {
        id: 'gddp9-01-q3',
        type: 'true_false',
        prompt: 'Thành phố Long Xuyên là trung tâm chính trị, kinh tế, văn hóa và khoa học kĩ thuật lớn nhất của tỉnh An Giang.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. TP. Long Xuyên là đô thị loại I trực thuộc tỉnh An Giang.'
      },
      {
        id: 'gddp9-01-q4',
        type: 'fill_in',
        prompt: 'Tuyến cao tốc Châu Đốc - Cần Thơ - Sóc Trăng đi qua An Giang đang được khẩn trương xây dựng kết nối với cảng biển nước sâu Trần ________.',
        correctAnswer: 'đề',
        points: 2,
        explanation: 'Cảng nước sâu Trần Đề.'
      },
      {
        id: 'gddp9-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu cảm nghĩ về tiềm năng phát triển vượt bậc của quê hương An Giang trong tương lai khi có đường cao tốc và hạ tầng giao thông kết nối liên vùng hiện đại.',
        points: 2,
        explanation: 'Học sinh trình bày: Cao tốc mở ra cánh cửa giao thương nhanh chóng, rút ngắn thời gian vận chuyển nông sản sang TP.HCM và xuất khẩu; thu hút nhiều doanh nghiệp đầu tư công nghiệp sạch; tạo nhiều việc làm cho thanh niên quê hương không phải ly hương.'
      }
    ]
  },
  {
    id: 'asg-gddp9-02',
    title: 'Bài tập Giáo dục địa phương 9: Truyền thống Cách mạng & Khát vọng Tuổi trẻ',
    subjectId: 'giao-duc-dia-phuong',
    grade: 9,
    description: 'Tự hào quê hương Chủ tịch Tôn Đức Thắng (Bác Tôn), truyền thống đấu tranh kiên cường của quân dân An Giang và khát vọng dựng xây quê hương.',
    durationMinutes: 15,
    dueDate: '2026-12-25T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gddp-01',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-26T12:00:00Z',
    questions: [
      {
        id: 'gddp9-02-q1',
        type: 'single_choice',
        prompt: 'Chủ tịch Tôn Đức Thắng - nhà lãnh đạo tiền bối xuất sắc của Đảng và Nhà nước ta sinh ra tại vùng đất nào của An Giang?',
        options: [
          'Cù lao Ông Hổ (xã Mỹ Hòa Hưng, thành phố Long Xuyên)',
          'Thị xã Tân Châu',
          'Huyện Tri Tôn',
          'Thành phố Châu Đốc'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Bác Tôn sinh ngày 20/8/1888 tại Cù lao Ông Hổ, làng An Hòa, tổng Định Thành (nay là xã Mỹ Hòa Hưng, TP. Long Xuyên).'
      },
      {
        id: 'gddp9-02-q2',
        type: 'multiple_choice',
        prompt: 'Những phẩm chất cao quý nào của Chủ tịch Tôn Đức Thắng là tấm gương sáng ngời cho thế hệ trẻ học tập và noi theo? (Chọn các phương án đúng)',
        options: [
          'Lòng yêu nước nồng nàn và tinh thần bất khuất trước quân thù',
          'Đức tính khiêm tốn, giản dị, gần gũi và trọn đời vì nước vì dân',
          'Tinh thần tự học, tự rèn luyện vươn lên từ người công nhân cơ khí',
          'Thói xa hoa lãng phí'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Bác Tôn là biểu tượng sáng ngời của đạo đức cách mạng: cần, kiệm, liêm, chính, chí công vô tư.'
      },
      {
        id: 'gddp9-02-q3',
        type: 'true_false',
        prompt: 'Khu lưu niệm Chủ tịch Tôn Đức Thắng tại Cù lao Ông Hổ đã được xếp hạng là Di tích quốc gia đặc biệt.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo Quyết định xếp hạng Di tích quốc gia đặc biệt năm 2012.'
      },
      {
        id: 'gddp9-02-q4',
        type: 'fill_in',
        prompt: 'Người công nhân Việt Nam đầu tiên kéo lá cờ đỏ trên chiến hạm Pháp tại Biển Đen năm 1919 ủng hộ Cách mạng Tháng Mười Nga là đồng chí Tôn Đức ________.',
        correctAnswer: 'thắng',
        points: 2,
        explanation: 'Tôn Đức Thắng.'
      },
      {
        id: 'gddp9-02-q5',
        type: 'essay',
        prompt: 'Là học sinh lớp 9 chuẩn bị tốt nghiệp ra trường, em xin hứa sẽ làm những việc gì cụ thể để xứng đáng với truyền thống quê hương Bác Tôn anh hùng?',
        points: 2,
        explanation: 'Học sinh bày tỏ quyết tâm: Quyết tâm thi đỗ vào trường THPT với điểm số cao nhất; tu dưỡng đạo đức, rèn luyện lối sống lành mạnh giản dị theo gương Bác Tôn; tích cực tham gia các phong trào vì cộng đồng và sẵn sàng cống hiến sức trẻ dựng xây quê hương An Giang.'
      }
    ]
  }
];


