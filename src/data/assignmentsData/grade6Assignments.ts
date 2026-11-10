import { Assignment } from '../../types';

export const GRADE_6_ASSIGNMENTS: Assignment[] = [
  // ==========================================
  // TIẾNG ANH KHỐI 6 (GLOBAL SUCCESS / CHUẨN GDPT 2018)
  // ==========================================
  {
    id: 'asg-eng6-01',
    title: 'Unit 1: My New School - Vocabulary & Present Simple',
    subjectId: 'tieng-anh',
    grade: 6,
    chapter: 'Unit 1: My New School',
    description: 'Luyện tập từ vựng về đồ dùng học tập, các môn học và thì hiện tại đơn (Present Simple Tense).',
    durationMinutes: 45,
    dueDate: '2026-11-25T23:59:00Z',
    maxPoints: 10,
    maxAttempts: 3,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-eng-01',
    teacherName: 'Tổ Tiếng Anh',
    createdAt: '2026-10-25T08:00:00Z',
    questions: [
      {
        id: 'eng6-01-q1',
        type: 'single_choice',
        prompt: 'Choose the best word to complete the sentence: Students wear their ________ on Mondays and Fridays.',
        options: ['uniform', 'compass', 'calculator', 'pencil sharpener'],
        correctAnswer: 0,
        points: 2,
        explanation: '"Uniform" (đồng phục) là trang phục học sinh mặc vào các ngày quy định.'
      },
      {
        id: 'eng6-01-q2',
        type: 'multiple_choice',
        prompt: 'Which of the following school subjects belong to Natural Sciences & Maths? (Select all correct answers)',
        options: ['Mathematics', 'Science', 'History', 'Physics'],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Mathematics (Toán), Science (Khoa học), Physics (Vật lý) thuộc nhóm môn tự nhiên. History (Lịch sử) thuộc nhóm xã hội.'
      },
      {
        id: 'eng6-01-q3',
        type: 'true_false',
        prompt: 'The sentence "My brother often go to school by bicycle every morning." is grammatically correct.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì chủ ngữ "My brother" là ngôi thứ ba số ít, động từ phải thêm "es": "goes to school".'
      },
      {
        id: 'eng6-01-q4',
        type: 'fill_in',
        prompt: 'Fill in the blank with the correct form of the verb in brackets: Nam (play) _________ football with his classmates every afternoon.',
        correctAnswer: 'plays',
        points: 2,
        explanation: 'Chủ ngữ Nam (ngôi thứ 3 số ít) + thì Hiện tại đơn: play -> plays.'
      },
      {
        id: 'eng6-01-q5',
        type: 'essay',
        prompt: 'Write a short paragraph (3-5 sentences) introducing your new school (school name, number of classes, your favourite subject, and why you like it).',
        points: 2,
        explanation: 'Gợi ý: I am a student at My Hoa Secondary School. My school is big and beautiful with 24 classrooms. My favourite subject is English because it is very fun and useful.'
      }
    ]
  },
  {
    id: 'asg-eng6-02',
    title: 'Unit 2: My House - Prepositions of Place & Rooms',
    subjectId: 'tieng-anh',
    grade: 6,
    chapter: 'Unit 2: My House',
    description: 'Thực hành từ vựng các phòng trong nhà, đồ dùng nội thất và giới từ chỉ vị trí (prepositions of place).',
    durationMinutes: 40,
    dueDate: '2026-11-28T23:59:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-eng-01',
    teacherName: 'Tổ Tiếng Anh',
    createdAt: '2026-10-27T09:00:00Z',
    questions: [
      {
        id: 'eng6-02-q1',
        type: 'single_choice',
        prompt: 'Where do family members usually prepare and cook meals?',
        options: ['In the kitchen', 'In the bathroom', 'In the bedroom', 'In the garage'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Kitchen (nhà bếp) là nơi nấu nướng và chuẩn bị bữa ăn của gia đình.'
      },
      {
        id: 'eng6-02-q2',
        type: 'multiple_choice',
        prompt: 'Which prepositions of place mean that an object is higher than or on top of another? (Select all correct answers)',
        options: ['on', 'above', 'under', 'behind'],
        correctAnswer: [0, 1],
        points: 2,
        explanation: '"on" (trên bề mặt) và "above" (ở phía trên cao hơn) diễn tả vị trí ở phía trên.'
      },
      {
        id: 'eng6-02-q3',
        type: 'true_false',
        prompt: 'In the sentence "There are two pillows on the bed.", the phrase "There are" is used because "two pillows" is plural.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: '"two pillows" là danh từ số nhiều nên dùng cấu trúc "There are".'
      },
      {
        id: 'eng6-02-q4',
        type: 'fill_in',
        prompt: 'Fill in the blank with the correct preposition: The cat is sleeping ________ (dưới) the table.',
        correctAnswer: 'under',
        points: 2,
        explanation: 'Giới từ "under" có nghĩa là ở phía dưới/dưới gầm.'
      },
      {
        id: 'eng6-02-q5',
        type: 'essay',
        prompt: 'Describe your bedroom in 3 to 4 sentences. Mention at least three pieces of furniture and where they are placed.',
        points: 2,
        explanation: 'Gợi ý: My bedroom is cozy. There is a bed next to the window. My study desk is opposite the bed. On the desk, there is a computer and a lamp.'
      }
    ]
  },

  // ==========================================
  // TOÁN HỌC KHỐI 6
  // ==========================================
  {
    id: 'asg-toan6-01',
    title: 'Số học 6: Tập hợp, Luỹ thừa và Dấu hiệu chia hết',
    subjectId: 'toan',
    grade: 6,
    chapter: 'Chương 1: Tập hợp các số tự nhiên',
    description: 'Ôn tập tính chất chia hết cho 2, 3, 5, 9, phép tính luỹ thừa với số mũ tự nhiên và thứ tự thực hiện phép tính.',
    durationMinutes: 45,
    dueDate: '2026-11-26T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-toan-01',
    teacherName: 'Tổ Toán - Tin',
    createdAt: '2026-10-26T10:00:00Z',
    questions: [
      {
        id: 'toan6-01-q1',
        type: 'single_choice',
        prompt: 'Giá trị của luỹ thừa 2^4 bằng bao nhiêu?',
        options: ['16', '8', '6', '12'],
        correctAnswer: 0,
        points: 2,
        explanation: '2^4 = 2 * 2 * 2 * 2 = 16.'
      },
      {
        id: 'toan6-01-q2',
        type: 'multiple_choice',
        prompt: 'Số nào sau đây vừa chia hết cho 2 vừa chia hết cho 5? (Chọn tất cả các đáp án đúng)',
        options: ['120', '350', '215', '4050'],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Số vừa chia hết cho 2 vừa chia hết cho 5 có chữ số tận cùng là 0: 120, 350, 4050.'
      },
      {
        id: 'toan6-01-q3',
        type: 'true_false',
        prompt: 'Mọi số nguyên tố đều là số lẻ.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Khẳng định sai vì số 2 là số nguyên tố chẵn.'
      },
      {
        id: 'toan6-01-q4',
        type: 'fill_in',
        prompt: 'Ước chung lớn nhất (ƯCLN) của hai số 24 và 36 là:',
        correctAnswer: '12',
        points: 2,
        explanation: '24 = 2^3 * 3, 36 = 2^2 * 3^2 => ƯCLN(24, 36) = 2^2 * 3 = 12.'
      },
      {
        id: 'toan6-01-q5',
        type: 'essay',
        prompt: 'Thực hiện phép tính: A = 125 + [ (8^2 - 14) : 2 ] * 3. Trình bày rõ ràng từng bước tính.',
        points: 2,
        explanation: '8^2 = 64; 64 - 14 = 50; 50 : 2 = 25; 25 * 3 = 75; 125 + 75 = 200.'
      }
    ]
  },
  {
    id: 'asg-toan6-02',
    title: 'Hình học 6: Các hình phẳng trong thực tiễn',
    subjectId: 'toan',
    grade: 6,
    chapter: 'Chương 3: Hình học trực quan',
    description: 'Nhận biết đặc điểm, tính chu vi và diện tích hình tam giác đều, hình vuông, hình chữ nhật và hình thoi.',
    durationMinutes: 40,
    dueDate: '2026-11-29T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-toan-01',
    teacherName: 'Tổ Toán - Tin',
    createdAt: '2026-10-27T14:00:00Z',
    questions: [
      {
        id: 'toan6-02-q1',
        type: 'single_choice',
        prompt: 'Một hình vuông có độ dài cạnh bằng 6 cm thì diện tích của hình vuông đó là:',
        options: ['36 cm²', '24 cm²', '12 cm²', '18 cm²'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Diện tích hình vuông S = a * a = 6 * 6 = 36 cm².'
      },
      {
        id: 'toan6-02-q2',
        type: 'multiple_choice',
        prompt: 'Hình thoi ABCD có những tính chất nào sau đây? (Chọn tất cả các phương án đúng)',
        options: [
          'Bốn cạnh có độ dài bằng nhau',
          'Hai đường chéo vuông góc với nhau',
          'Bốn góc luôn luôn bằng 90 độ',
          'Các cạnh đối song song với nhau'
        ],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Hình thoi có 4 cạnh bằng nhau, 2 đường chéo vuông góc và các cạnh đối song song. Bốn góc bằng 90 độ là hình vuông.'
      },
      {
        id: 'toan6-02-q3',
        type: 'true_false',
        prompt: 'Tam giác đều là tam giác có ba cạnh bằng nhau và ba góc bằng nhau (đều bằng 60°).',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo định nghĩa tam giác đều.'
      },
      {
        id: 'toan6-02-q4',
        type: 'fill_in',
        prompt: 'Chu vi của một hình chữ nhật có chiều dài 15 m và chiều rộng 8 m là bao nhiêu mét? (Chỉ nhập số)',
        correctAnswer: '46',
        points: 2,
        explanation: 'Chu vi C = (15 + 8) * 2 = 23 * 2 = 46 m.'
      },
      {
        id: 'toan6-02-q5',
        type: 'essay',
        prompt: 'Một mảnh vườn hình chữ nhật có chiều dài 20 m, chiều rộng 12 m. Người ta dùng một phần đất hình vuông cạnh 5 m để trồng hoa. Tính diện tích phần đất còn lại.',
        points: 2,
        explanation: 'Diện tích mảnh vườn: 20 * 12 = 240 m². Diện tích đất trồng hoa: 5 * 5 = 25 m². Diện tích còn lại: 240 - 25 = 215 m².'
      }
    ]
  },

  // ==========================================
  // NGỮ VĂN KHỐI 6
  // ==========================================
  {
    id: 'asg-van6-01',
    title: 'Đọc hiểu Ngữ văn 6: Lắng nghe lịch sử nước mình',
    subjectId: 'van',
    grade: 6,
    chapter: 'Bài 1: Lắng nghe lịch sử nước mình',
    description: 'Khám phá đặc trưng thể loại truyền thuyết qua văn bản Thánh Gióng và Sự tích Hồ Gươm.',
    durationMinutes: 45,
    dueDate: '2026-11-27T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-van-01',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-25T11:00:00Z',
    questions: [
      {
        id: 'van6-01-q1',
        type: 'single_choice',
        prompt: 'Chi tiết Thánh Gióng vươn vai biến thành tráng sĩ cao lớn thể hiện điều gì?',
        options: [
          'Sức mạnh phi thường và sự trưởng thành vượt bậc của nhân dân khi đất nước có giặc ngoại xâm',
          'Sự màu nhiệm của thần linh ban cho Gióng',
          'Ước mơ có nhiều thức ăn và gạo ngon',
          'Sự may mắn ngẫu nhiên'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Hình tượng Gióng vươn vai tượng trưng cho sức bật quật khởi của toàn thể nhân dân ta mỗi khi tổ quốc lâm nguy.'
      },
      {
        id: 'van6-01-q2',
        type: 'multiple_choice',
        prompt: 'Những yếu tố nào sau đây là đặc trưng tiêu biểu của truyện truyền thuyết? (Chọn các phương án đúng)',
        options: [
          'Kể về các nhân vật, sự kiện lịch sử trong quá khứ',
          'Có các chi tiết hoang đường, kỳ ảo tưởng tượng',
          'Thể hiện thái độ, cách đánh giá của nhân dân đối với nhân vật lịch sử',
          'Luôn có động vật biết nói và thần tiên trừng phạt kẻ xấu như truyện ngụ ngôn'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Truyền thuyết dựa trên cốt lõi lịch sử kết hợp chi tiết kỳ ảo để ca ngợi hoặc đánh giá nhân vật theo quan niệm nhân dân.'
      },
      {
        id: 'van6-01-q3',
        type: 'true_false',
        prompt: 'Trong truyền thuyết "Sự tích Hồ Gươm", chi tiết Rùa Vàng đòi gươm thể hiện khát vọng hòa bình của dân tộc Việt Nam.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Rùa Vàng đòi lại gươm báu khi đất nước đã sạch bóng quân thù, thể hiện nhân dân muốn cất vũ khí để xây dựng cuộc sống thanh bình.'
      },
      {
        id: 'van6-01-q4',
        type: 'fill_in',
        prompt: 'Điền tên địa danh còn thiếu: Sau khi đánh tan giặc Ân, Thánh Gióng cưỡi ngựa sắt bay về trời tại đỉnh núi ___________ (thuộc huyện Sóc Sơn, Hà Nội).',
        correctAnswer: 'Sóc Sơn',
        points: 2,
        explanation: 'Đỉnh núi Sóc (Sóc Sơn, Hà Nội) là nơi Thánh Gióng cởi áo giáp bay về trời.'
      },
      {
        id: 'van6-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu cảm nhận ngắn (khoảng 4-6 câu) về hình ảnh cậu bé Gióng ba năm không nói không cười, nhưng tiếng nói đầu tiên cất lên lại là tiếng nói đòi đi đánh giặc cứu nước.',
        points: 2,
        explanation: 'Gợi ý: Tiếng nói đầu tiên của Gióng là tiếng nói thiêng liêng yêu nước. Nó khẳng định tinh thần tự giác, ý thức trách nhiệm bảo vệ giang sơn sẵn sàng bừng tỉnh trong mỗi con người Việt Nam.'
      }
    ]
  },
  {
    id: 'asg-van6-02',
    title: 'Thực hành Tiếng Việt 6: Biện pháp tu từ So sánh và Nhân hóa',
    subjectId: 'van',
    grade: 6,
    chapter: 'Thực hành Tiếng Việt: Các biện pháp tu từ',
    description: 'Nhận biết, phân tích cấu tạo và tác dụng biểu cảm của phép so sánh và nhân hóa trong văn bản thơ ca.',
    durationMinutes: 40,
    dueDate: '2026-11-30T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-van-01',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-28T09:00:00Z',
    questions: [
      {
        id: 'van6-02-q1',
        type: 'single_choice',
        prompt: 'Câu thơ nào sau đây sử dụng biện pháp tu từ so sánh ngang bằng?',
        options: [
          'Trẻ em như búp trên cành',
          'Mặt trời gác núi, bóng chiều dần buông',
          'Cây dừa dang tay đón gió',
          'Bác đã đi rồi sao Bác ơi'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: '"Trẻ em như búp trên cành" sử dụng từ so sánh "như" để đối sánh giữa trẻ em và búp non.'
      },
      {
        id: 'van6-02-q2',
        type: 'multiple_choice',
        prompt: 'Những cách nào sau đây là hình thức của biện pháp nhân hóa? (Chọn các phương án đúng)',
        options: [
          'Dùng từ ngữ vốn gọi người để gọi vật',
          'Dùng từ ngữ chỉ hoạt động, tính chất của người để chỉ hoạt động, tính chất của vật',
          'Trò chuyện, xưng hô với vật như với người',
          'Đối chiếu hai sự vật có nét tương đồng về màu sắc'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Ba hình thức nhân hóa gồm: gọi vật bằng từ gọi người, tả vật bằng từ tả người, và trò chuyện xưng hô với vật.'
      },
      {
        id: 'van6-02-q3',
        type: 'true_false',
        prompt: 'Trong câu "Dòng sông uốn lượn như một dải lụa đào vắt ngang cánh đồng", từ "uốn lượn" là từ ngữ so sánh chính.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì từ ngữ so sánh là từ "như", còn "uốn lượn" là phương diện so sánh/hoạt động.'
      },
      {
        id: 'van6-02-q4',
        type: 'fill_in',
        prompt: 'Điền từ thích hợp vào chỗ trống: Mô hình cấu tạo đầy đủ của phép so sánh gồm 4 phần: Vế A (sự vật so sánh), Phương diện so sánh, Từ so sánh, và Vế _____ (sự vật dùng để so sánh).',
        correctAnswer: 'B',
        points: 2,
        explanation: 'Cấu tạo phép so sánh gồm Vế A - Phương diện - Từ so sánh - Vế B.'
      },
      {
        id: 'van6-02-q5',
        type: 'essay',
        prompt: 'Đặt một câu văn có sử dụng phép nhân hóa miêu tả một loài cây hoặc một đồ dùng học tập của em, và giải thích vì sao câu đó có tính nhân hóa.',
        points: 2,
        explanation: 'Ví dụ: "Mỗi sớm mai, bác bàng già lại dang rộng cánh tay xanh rì chào đón chúng em tới lớp." Nhân hóa vì dùng "bác" để gọi cây bàng và "dang cánh tay chào đón" miêu tả hành động của người.'
      }
    ]
  },

  // ==========================================
  // KHOA HỌC TỰ NHIÊN KHỐI 6
  // ==========================================
  {
    id: 'asg-khtn6-01',
    title: 'KHTN 6: Tế bào - Đơn vị cơ sở của sự sống',
    subjectId: 'khtn',
    grade: 6,
    chapter: 'Chủ đề 7: Tế bào - Đơn vị cơ sở của sự sống',
    description: 'Tìm hiểu cấu tạo tế bào nhân sơ, nhân thực, sự khác nhau giữa tế bào thực vật và tế bào động vật.',
    durationMinutes: 45,
    dueDate: '2026-11-27T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-khtn-01',
    teacherName: 'Tổ KHTN',
    createdAt: '2026-10-26T15:00:00Z',
    questions: [
      {
        id: 'khtn6-01-q1',
        type: 'single_choice',
        prompt: 'Thành phần nào của tế bào có chức năng điều khiển mọi hoạt động sống của tế bào?',
        options: ['Nhân tế bào (hoặc vùng nhân)', 'Màng tế bào', 'Chất tế bào', 'Thành tế bào'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Nhân tế bào chứa vật chất di truyền, giữ vai trò chỉ huy và điều khiển mọi hoạt động trao đổi chất của tế bào.'
      },
      {
        id: 'khtn6-01-q2',
        type: 'multiple_choice',
        prompt: 'Những bào quan/cấu trúc nào sau đây chỉ có ở tế bào thực vật mà không có ở tế bào động vật? (Chọn các phương án đúng)',
        options: ['Thành tế bào (xenlulôzơ)', 'Lục lạp (chứa diệp lục)', 'Màng sinh chất', 'Nhân tế bào'],
        correctAnswer: [0, 1],
        points: 2,
        explanation: 'Thành tế bào và lục lạp là hai thành phần đặc trưng giúp thực vật quang hợp và có hình dạng cố định.'
      },
      {
        id: 'khtn6-01-q3',
        type: 'true_false',
        prompt: 'Từ một tế bào ban đầu, sau một lần phân chia sẽ tạo ra 4 tế bào con.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì sau một lần phân chia, một tế bào mẹ chỉ tạo ra 2 tế bào con (công thức 2^n).'
      },
      {
        id: 'khtn6-01-q4',
        type: 'fill_in',
        prompt: 'Bào quan có màu xanh lục ở tế bào lá cây giữ chức năng hấp thụ ánh sáng mặt trời để thực hiện quá trình quang hợp là ___________.',
        correctAnswer: 'lục lạp',
        points: 2,
        explanation: 'Lục lạp (chloroplast) chứa chất diệp lục giúp cây xanh tổng hợp chất hữu cơ từ CO2 và nước.'
      },
      {
        id: 'khtn6-01-q5',
        type: 'essay',
        prompt: 'Vì sao nói: "Tế bào vừa là đơn vị cấu trúc, vừa là đơn vị chức năng của mọi cơ thể sống"? Nêu ví dụ minh họa ngắn gọn.',
        points: 2,
        explanation: 'Mọi sinh vật từ vi khuẩn đơn bào đến con người đều cấu tạo từ một hay nhiều tế bào. Mọi hoạt động sống (trao đổi chất, lớn lên, sinh sản) đều diễn ra bên trong tế bào.'
      }
    ]
  },
  {
    id: 'asg-khtn6-02',
    title: 'KHTN 6: Các phép đo cơ bản trong nghiên cứu khoa học',
    subjectId: 'khtn',
    grade: 6,
    chapter: 'Chủ đề 1: Các phép đo',
    description: 'Cách sử dụng dụng cụ đo độ dài, khối lượng, thời gian và nhiệt độ; xác định GHĐ và ĐCNN.',
    durationMinutes: 40,
    dueDate: '2026-11-28T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-khtn-01',
    teacherName: 'Tổ KHTN',
    createdAt: '2026-10-27T16:00:00Z',
    questions: [
      {
        id: 'khtn6-02-q1',
        type: 'single_choice',
        prompt: 'Giới hạn đo (GHĐ) của một cây thước là gì?',
        options: [
          'Độ dài lớn nhất ghi trên thước',
          'Độ dài giữa hai vạch chia liên tiếp trên thước',
          'Khoảng cách nhỏ nhất mà thước có thể đo',
          'Chiều rộng của cây thước'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Giới hạn đo của thước là độ dài lớn nhất ghi trên thước.'
      },
      {
        id: 'khtn6-02-q2',
        type: 'multiple_choice',
        prompt: 'Đơn vị nào sau đây là đơn vị đo khối lượng hợp pháp trong hệ thống đo lường quốc tế (SI)? (Chọn các phương án đúng)',
        options: ['Kilôgam (kg)', 'Gam (g)', 'Tấn', 'Lít (l)'],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'kg, g, tấn là các đơn vị đo khối lượng. Lít là đơn vị đo thể tích.'
      },
      {
        id: 'khtn6-02-q3',
        type: 'true_false',
        prompt: 'Khi đọc kết quả đo nhiệt độ bằng nhiệt kế thủy ngân, mắt cần đặt nghiêng 45 độ so với cột chất lỏng.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì mắt phải nhìn vuông góc với thang chia độ ở mực chất lỏng để tránh sai số.'
      },
      {
        id: 'khtn6-02-q4',
        type: 'fill_in',
        prompt: 'Độ chia nhỏ nhất (ĐCNN) của thước kẻ có các vạch milimét (mm) liền kề nhau là bao nhiêu mm? (Chỉ nhập số)',
        correctAnswer: '1',
        points: 2,
        explanation: 'Khoảng cách giữa hai vạch chia nhỏ nhất là 1 mm.'
      },
      {
        id: 'khtn6-02-q5',
        type: 'essay',
        prompt: 'Nêu các bước cần thiết khi thực hiện phép đo chiều dài cuốn sách giáo khoa KHTN 6 bằng thước kẻ có ĐCNN 1 mm.',
        points: 2,
        explanation: 'Các bước: 1. Ước lượng chiều dài; 2. Chọn thước có GHĐ và ĐCNN thích hợp; 3. Đặt thước dọc theo cạnh sách, vạch số 0 trùng với một đầu; 4. Đặt mắt vuông góc nhìn vạch đo; 5. Đọc và ghi kết quả theo ĐCNN.'
      }
    ]
  },

  // ==========================================
  // LỊCH SỬ VÀ ĐỊA LÍ KHỐI 6
  // ==========================================
  {
    id: 'asg-lsdl6-01',
    title: 'Lịch sử 6: Nguồn gốc loài người và Văn minh cổ đại phương Đông',
    subjectId: 'lich-su-dia-ly',
    grade: 6,
    chapter: 'Lịch sử - Chương 1: Thời nguyên thủy & Cổ đại',
    description: 'Tìm hiểu quá trình tiến hóa từ Vượn người thành Người hiện đại và các nền văn minh lưu vực sông lớn.',
    durationMinutes: 45,
    dueDate: '2026-11-28T20:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-lsdl-01',
    teacherName: 'Tổ Sử - Địa',
    createdAt: '2026-10-26T08:30:00Z',
    questions: [
      {
        id: 'lsdl6-01-q1',
        type: 'single_choice',
        prompt: 'Nền văn minh Ai Cập cổ đại được hình thành gắn liền với lưu vực con sông nổi tiếng nào?',
        options: ['Sông Nin (Nile)', 'Sông Tigris', 'Sông Hằng', 'Sông Hoàng Hà'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Sông Nin đem lại phù sa màu mỡ và là cái nôi nuôi dưỡng nền văn minh Ai Cập cổ đại ("Ai Cập là tặng phẩm của sông Nin").'
      },
      {
        id: 'lsdl6-01-q2',
        type: 'multiple_choice',
        prompt: 'Những thành tựu văn hóa tiêu biểu nào thuộc về các nền văn minh cổ đại phương Đông? (Chọn các phương án đúng)',
        options: [
          'Chữ tượng hình trên giấy Pa-pi-rút hoặc mai rùa',
          'Kim tự tháp Kê-ốp và tượng Nhân sư',
          'Hệ số đếm thập phân và số 0 (Ấn Độ)',
          'Đấu trường Cô-li-dê (Colosseum)'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Đấu trường Cô-li-dê thuộc văn minh La Mã cổ đại (phương Tây).'
      },
      {
        id: 'lsdl6-01-q3',
        type: 'true_false',
        prompt: 'Người tối cổ đã biết chế tạo công cụ bằng đá ghè đẽo thô sơ và biết dùng lửa để sưởi ấm, nướng chín thức ăn.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Việc phát minh ra lửa và dùng đá ghè đẽo là bước tiến lịch sử của Người tối cổ.'
      },
      {
        id: 'lsdl6-01-q4',
        type: 'fill_in',
        prompt: 'Điền tên con sông: Văn minh Lưỡng Hà cổ đại được hình thành giữa hai con sông Tigris và ___________.',
        correctAnswer: 'Euphrates',
        points: 2,
        explanation: 'Lưỡng Hà (Mesopotamia) là vùng đất nằm giữa sông Tigris và sông Euphrates.'
      },
      {
        id: 'lsdl6-01-q5',
        type: 'essay',
        prompt: 'Vì sao các nền văn minh đầu tiên của nhân loại ở phương Đông (Ai Cập, Lưỡng Hà, Ấn Độ, Trung Quốc) đều xuất hiện bên bờ các con sông lớn?',
        points: 2,
        explanation: 'Vì các lưu vực sông lớn có nguồn nước dồi dào, phù sa màu mỡ thích hợp cho canh tác nông nghiệp trồng lúa, thuận lợi cho giao thông đường thủy và sinh hoạt cộng đồng.'
      }
    ]
  },
  {
    id: 'asg-lsdl6-02',
    title: 'Địa lí 6: Chuyển động tự quay quanh trục của Trái Đất',
    subjectId: 'lich-su-dia-ly',
    grade: 6,
    chapter: 'Địa lí - Chương 2: Trái Đất - Hành tinh của Hệ Mặt Trời',
    description: 'Hệ quả chuyển động tự quay của Trái Đất: Hiện tượng ngày đêm luân phiên, giờ khu vực và lực Cô-ri-ô-lit.',
    durationMinutes: 40,
    dueDate: '2026-11-29T20:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-lsdl-01',
    teacherName: 'Tổ Sử - Địa',
    createdAt: '2026-10-27T08:30:00Z',
    questions: [
      {
        id: 'lsdl6-02-q1',
        type: 'single_choice',
        prompt: 'Trái Đất tự quay quanh trục theo hướng nào?',
        options: ['Từ Tây sang Đông', 'Từ Đông sang Tây', 'Từ Bắc xuống Nam', 'Từ Nam lên Bắc'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Trái Đất tự quay quanh trục nghiêng từ Tây sang Đông, do đó chúng ta thấy Mặt Trời mọc ở hướng Đông và lặn ở hướng Tây.'
      },
      {
        id: 'lsdl6-02-q2',
        type: 'multiple_choice',
        prompt: 'Những hiện tượng nào sau đây là hệ quả của chuyển động tự quay quanh trục của Trái Đất? (Chọn các phương án đúng)',
        options: [
          'Sự luân phiên ngày và đêm trên khắp bề mặt Trái Đất',
          'Sự lệch hướng chuyển động của các vật thể (lực Coriolis)',
          'Giờ khu vực và giờ quốc tế (múi giờ)',
          'Hiện tượng 4 mùa Xuân - Hạ - Thu - Đông luân phiên'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Hiện tượng 4 mùa là do chuyển động của Trái Đất quanh Mặt Trời với trục nghiêng không đổi.'
      },
      {
        id: 'lsdl6-02-q3',
        type: 'true_false',
        prompt: 'Việt Nam nằm trọn trong khu vực giờ số 7 (múi giờ UTC+7).',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Giờ tiêu chuẩn của Việt Nam là múi giờ thứ 7 (GMT+7 / UTC+7).'
      },
      {
        id: 'lsdl6-02-q4',
        type: 'fill_in',
        prompt: 'Thời gian Trái Đất tự quay trọn một vòng quanh trục của nó là bao nhiêu giờ? (Chỉ nhập số)',
        correctAnswer: '24',
        points: 2,
        explanation: 'Trái Đất quay một vòng hết 24 giờ (tương đương 1 ngày đêm).'
      },
      {
        id: 'lsdl6-02-q5',
        type: 'essay',
        prompt: 'Giải thích vì sao có sự luân phiên ngày và đêm trên Trái Đất. Giả sử nếu Trái Đất không tự quay quanh trục thì điều gì sẽ xảy ra?',
        points: 2,
        explanation: 'Do Trái Đất hình cầu nên một nửa luôn được chiếu sáng (ngày) và một nửa trong bóng tối (đêm). Nhờ Trái Đất tự quay quanh trục từ Tây sang Đông nên mọi nơi lần lượt được chiếu sáng. Nếu không quay, một nửa sẽ là ngày vĩnh viễn (nóng cháy) và nửa kia là đêm vĩnh viễn (băng giá).'
      }
    ]
  },

  // ==========================================
  // GIÁO DỤC CÔNG DÂN KHỐI 6
  // ==========================================
  {
    id: 'asg-gdcd6-01',
    title: 'GDCD 6: Tự hào về truyền thống gia đình, dòng họ',
    subjectId: 'gdcd',
    grade: 6,
    chapter: 'Chủ đề 1: Tự hào về truyền thống gia đình, dòng họ',
    description: 'Nhận biết các giá trị truyền thống tốt đẹp của gia đình, dòng họ và trách nhiệm gìn giữ, phát huy.',
    durationMinutes: 40,
    dueDate: '2026-11-29T21:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdcd-01',
    teacherName: 'Tổ GDCD',
    createdAt: '2026-10-26T14:30:00Z',
    questions: [
      {
        id: 'gdcd6-01-q1',
        type: 'single_choice',
        prompt: 'Hành vi nào dưới đây thể hiện việc kế thừa và phát huy truyền thống tốt đẹp của gia đình, dòng họ?',
        options: [
          'Tích cực học tập, rèn luyện đạo đức để tiếp nối nghề truyền thống của cha ông',
          'Xấu hổ, giấu giếm nguồn gốc gia đình vì làm nông nghiệp',
          'Chỉ quan tâm đến lợi ích bản thân, không tham gia giỗ tổ họ hàng',
          'Bắt chước các thói hư tật xấu của bạn bè ngoài xã hội'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Tích cực học tập và trân trọng nghề nghiệp truyền thống là biểu hiện chuẩn mực của lòng tự hào.'
      },
      {
        id: 'gdcd6-01-q2',
        type: 'multiple_choice',
        prompt: 'Những truyền thống tốt đẹp nào của gia đình, dòng họ người Việt Nam cần được bảo tồn? (Chọn các phương án đúng)',
        options: [
          'Hiếu học, tôn sư trọng đạo',
          'Cần cù, sáng tạo trong lao động sản xuất',
          'Yêu nước, đoàn kết tương thân tương ái',
          'Tập tục mê tín dị đoan và phân biệt thứ bậc nam nữ'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Mê tín dị đoan và phân biệt đối xử là hủ tục lạc hậu cần loại bỏ.'
      },
      {
        id: 'gdcd6-01-q3',
        type: 'true_false',
        prompt: 'Chỉ những gia đình giàu có hoặc làm quan chức lớn mới có truyền thống đáng tự hào.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì mọi gia đình, dòng họ dù làm nghề gì lương thiện (làm nông, làm thợ, hiếu học, sống nhân hậu) đều có truyền thống quý báu đáng tự hào.'
      },
      {
        id: 'gdcd6-01-q4',
        type: 'fill_in',
        prompt: 'Điền từ còn thiếu vào câu thành ngữ ca dao: "Con người có tổ có tông, Như cây có cội, như ________ có nguồn".',
        correctAnswer: 'sông',
        points: 2,
        explanation: '"Con người có tổ có tông, như cây có cội, như sông có nguồn" nhắc nhở lòng biết ơn cội nguồn.'
      },
      {
        id: 'gdcd6-01-q5',
        type: 'essay',
        prompt: 'Em hãy kể lại 1 truyền thống tốt đẹp của gia đình hoặc dòng họ mình (ví dụ: hiếu thảo, chăm chỉ, tương trợ bà con...) và nêu việc làm cụ thể của em để giữ gìn truyền thống đó.',
        points: 2,
        explanation: 'Học sinh nêu chân thực truyền thống (hiếu học, đoàn kết, kính trên nhường dưới...) và liên hệ bản thân: nỗ lực đạt kết quả tốt trong học tập, lễ phép với ông bà cha mẹ.'
      }
    ]
  },
  {
    id: 'asg-gdcd6-02',
    title: 'GDCD 6: Yêu thương con người và lối sống tiết kiệm',
    subjectId: 'gdcd',
    grade: 6,
    chapter: 'Chủ đề 2: Yêu thương con người & Lối sống tiết kiệm',
    description: 'Thấu hiểu ý nghĩa của tình yêu thương con người, phân biệt tiết kiệm với keo kiệt, lãng phí.',
    durationMinutes: 40,
    dueDate: '2026-11-30T21:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdcd-01',
    teacherName: 'Tổ GDCD',
    createdAt: '2026-10-28T14:30:00Z',
    questions: [
      {
        id: 'gdcd6-02-q1',
        type: 'single_choice',
        prompt: 'Biểu hiện nào sau đây thể hiện tình yêu thương con người?',
        options: [
          'Chia sẻ, ủng hộ sách vở và áo ấm cho bạn bè vùng bị bão lũ',
          'Thờ ơ, đứng nhìn khi thấy bạn bị ngã xe giữa đường',
          'Chế giễu những bạn có hoàn cảnh khó khăn hơn mình',
          'Tranh giành đồ ăn với em nhỏ'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Giúp đỡ đồng bào và bạn bè lúc hoạn nạn là nghĩa cử cao đẹp của lòng nhân ái.'
      },
      {
        id: 'gdcd6-02-q2',
        type: 'multiple_choice',
        prompt: 'Những hành động nào sau đây là biểu hiện của lối sống tiết kiệm? (Chọn các phương án đúng)',
        options: [
          'Tắt điện, quạt khi rời khỏi phòng học',
          'Khóa vòi nước cẩn thận sau khi rửa tay',
          'Giữ gìn sách giáo khoa cẩn thận để tặng lại cho các em lớp sau',
          'Không dám ăn uống đủ chất vì muốn để dành toàn bộ tiền'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Không ăn uống đầy đủ là hà tiện, keo kiệt làm hại sức khỏe, không phải tiết kiệm đúng nghĩa.'
      },
      {
        id: 'gdcd6-02-q3',
        type: 'true_false',
        prompt: 'Tiết kiệm chỉ là tiết kiệm tiền bạc, còn thời gian và sức lực thì không cần phải tiết kiệm.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì tiết kiệm bao gồm cả tiền bạc, của cải, thời gian, điện nước và công sức lao động.'
      },
      {
        id: 'gdcd6-02-q4',
        type: 'fill_in',
        prompt: 'Điền từ còn thiếu vào câu tục ngữ: "Lá lành đùm lá rách, lá rách đùm lá ________ hơn".',
        correctAnswer: 'nát',
        points: 2,
        explanation: '"Lá lành đùm lá rách, lá rách đùm lá nát" là truyền thống tương thân tương ái của nhân dân ta.'
      },
      {
        id: 'gdcd6-02-q5',
        type: 'essay',
        prompt: 'Em hãy đề xuất 3 biện pháp thiết thực mà học sinh lớp 6 có thể làm để thực hành tiết kiệm điện và nước ngay tại trường học.',
        points: 2,
        explanation: '3 biện pháp: 1. Tắt đèn và quạt khi ra khỏi lớp học vào giờ ra chơi hoặc tan học; 2. Sử dụng nước vừa đủ khi rửa tay và vặn chặt vòi nước; 3. Kịp thời báo cho thầy cô hoặc bác bảo vệ khi phát hiện vòi nước rò rỉ.'
      }
    ]
  },

  // ==========================================
  // CÔNG NGHỆ KHỐI 6
  // ==========================================
  {
    id: 'asg-cn6-01',
    title: 'Công nghệ 6: Nhà ở và sử dụng năng lượng tiết kiệm',
    subjectId: 'cong-nghe',
    grade: 6,
    chapter: 'Chương 1: Nhà ở',
    description: 'Khái niệm về nhà ở, các khu vực chức năng, vật liệu xây dựng và giải pháp sử dụng năng lượng hiệu quả.',
    durationMinutes: 40,
    dueDate: '2026-11-28T22:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-cn-01',
    teacherName: 'Tổ Công nghệ',
    createdAt: '2026-10-27T11:00:00Z',
    questions: [
      {
        id: 'cn6-01-q1',
        type: 'single_choice',
        prompt: 'Khu vực nào trong nhà ở dùng để tiếp khách và sinh hoạt chung của cả gia đình?',
        options: ['Phòng khách', 'Phòng ngủ', 'Phòng tắm', 'Phòng chứa đồ'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Phòng khách là không gian sinh hoạt chung và đón tiếp khách đến thăm nhà.'
      },
      {
        id: 'cn6-02-q2',
        type: 'multiple_choice',
        prompt: 'Những hành động nào sau đây giúp tiết kiệm năng lượng điện trong gia đình? (Chọn các phương án đúng)',
        options: [
          'Sử dụng bóng đèn LED thay thế đèn sợi đốt',
          'Tận dụng gió trời và ánh sáng tự nhiên qua cửa sổ sổ ban ngày',
          'Để tủ lạnh mở cửa thường xuyên để làm mát phòng',
          'Rút phích cắm các thiết bị điện tử khi không sử dụng thời gian dài'
        ],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Mở cửa tủ lạnh sẽ làm thất thoát nhiệt và tiêu tốn rất nhiều điện năng.'
      },
      {
        id: 'cn6-01-q3',
        type: 'true_false',
        prompt: 'Nhà sàn là kiểu kiến trúc nhà ở truyền thống phù hợp với địa hình đồi núi, dốc và vùng ngập nước.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Nhà sàn giúp tránh thú dữ, ẩm thấp và thích nghi với địa hình vùng cao.'
      },
      {
        id: 'cn6-01-q4',
        type: 'fill_in',
        prompt: 'Nguồn năng lượng tái tạo sạch được khai thác trực tiếp từ ánh nắng mặt trời để đun nước nóng trong gia đình gọi là năng lượng ___________.',
        correctAnswer: 'mặt trời',
        points: 2,
        explanation: 'Năng lượng mặt trời (thái dương năng) được ứng dụng phổ biến trong sinh hoạt.'
      },
      {
        id: 'cn6-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu cấu tạo cơ bản của ngôi nhà gồm những phần chính nào và vai trò của phần móng nhà.',
        points: 2,
        explanation: 'Ngôi nhà gồm: móng nhà, sàn nhà, khung cột, tường bao, cửa và mái nhà. Móng nhà nằm sâu dưới mặt đất có nhiệm vụ nâng đỡ và truyền toàn bộ tải trọng của ngôi nhà xuống nền đất vững chắc.'
      }
    ]
  },
  {
    id: 'asg-cn6-02',
    title: 'Công nghệ 6: Bảo quản và chế biến thực phẩm an toàn',
    subjectId: 'cong-nghe',
    grade: 6,
    chapter: 'Chương 2: Bảo quản và chế biến thực phẩm',
    description: 'Các nhóm chất dinh dưỡng cần thiết, nguyên tắc bảo quản và phương pháp chế biến món ăn không dùng nhiệt.',
    durationMinutes: 40,
    dueDate: '2026-11-30T22:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-cn-01',
    teacherName: 'Tổ Công nghệ',
    createdAt: '2026-10-29T11:00:00Z',
    questions: [
      {
        id: 'cn6-02-q1',
        type: 'single_choice',
        prompt: 'Nhóm chất dinh dưỡng nào là nguồn cung cấp năng lượng chủ yếu cho các hoạt động của cơ thể người?',
        options: ['Chất đường bột (Carbohydrate)', 'Chất đạm (Protein)', 'Chất béo (Lipid)', 'Vitamin và khoáng chất'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Chất đường bột (gạo, bắp, khoai tây...) cung cấp phần lớn năng lượng hoạt động hàng ngày.'
      },
      {
        id: 'cn6-02-q2',
        type: 'multiple_choice',
        prompt: 'Phương pháp nào sau đây là phương pháp chế biến thực phẩm KHÔNG sử dụng nhiệt? (Chọn các phương án đúng)',
        options: ['Trộn dầu giấm', 'Trộn nộm (gỏi)', 'Luộc chín', 'Muối chua'],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Luộc là phương pháp làm chín thực phẩm trong môi trường nước có sử dụng nhiệt.'
      },
      {
        id: 'cn6-02-q3',
        type: 'true_false',
        prompt: 'Để đảm bảo an toàn vệ sinh thực phẩm, ta có thể dùng chung một thớt cho cả thịt sống và rau quả ăn chín trực tiếp.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì dùng chung thớt gây nhiễm khuẩn chéo từ thực phẩm sống sang thực phẩm ăn chín.'
      },
      {
        id: 'cn6-02-q4',
        type: 'fill_in',
        prompt: 'Nhiệt độ thích hợp trong ngăn mát của tủ lạnh để bảo quản rau củ quả tươi thường từ 1 độ C đến _____ độ C. (Chỉ nhập số)',
        correctAnswer: '4',
        points: 2,
        explanation: 'Nhiệt độ ngăn mát thường dao động từ 1°C đến 4°C để ức chế vi khuẩn sinh sôi.'
      },
      {
        id: 'cn6-02-q5',
        type: 'practice',
        prompt: 'Trình bày quy trình các bước làm món "Nộm rau muống tai heo" hoặc "Salad dưa chuột cà chua trộn dầu giấm" đảm bảo giòn ngon và an toàn vệ sinh.',
        points: 2,
        explanation: 'Các bước: 1. Sơ chế nguyên liệu sạch sẽ; 2. Pha nước trộn (giấm, đường, tỏi, ớt, nước mắm); 3. Trộn đều nguyên liệu với nước sốt; 4. Bày ra đĩa và rắc đậu phộng rang giã nhỏ.'
      }
    ]
  },

  // ==========================================
  // TIN HỌC KHỐI 6
  // ==========================================
  {
    id: 'asg-tin6-01',
    title: 'Bài tập tuần 8: Mạng máy tính và An toàn trên Internet',
    subjectId: 'tin-hoc',
    grade: 6,
    chapter: 'Chủ đề 2: Mạng máy tính và Internet',
    description: 'Học sinh làm các câu hỏi trắc nghiệm, đúng/sai, điền từ và câu hỏi tự luận ngắn về lợi ích và nguy cơ khi sử dụng Internet.',
    durationMinutes: 45,
    dueDate: '2026-11-25T23:59:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-tin-01',
    teacherName: 'Tổ Tin học',
    createdAt: '2026-10-25T08:00:00Z',
    questions: [
      {
        id: 'q-asg-1',
        type: 'single_choice',
        prompt: 'Mạng máy tính là gì?',
        options: [
          'Tập hợp các máy tính nối với nhau bằng các thiết bị mạng và phương tiện truyền thông để chia sẻ dữ liệu',
          'Một phần mềm dùng để soạn thảo văn bản',
          'Một trang web tìm kiếm thông tin trên mạng Internet',
          'Thiết bị phần cứng dùng để gõ chữ'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Mạng máy tính là tập hợp các máy tính và thiết bị được kết nối với nhau để chia sẻ dữ liệu và tài nguyên.'
      },
      {
        id: 'q-asg-2',
        type: 'multiple_choice',
        prompt: 'Những hành vi nào dưới đây giúp bảo vệ thông tin cá nhân và an toàn trên Internet? (Chọn các phương án đúng)',
        options: [
          'Không chia sẻ mật khẩu tài khoản cho người lạ',
          'Đặt mật khẩu mạnh gồm cả chữ hoa, chữ thường, số và ký tự đặc biệt',
          'Cung cấp địa chỉ nhà và số điện thoại khi đăng nhập bất kỳ trang web lạ nào',
          'Đăng xuất khỏi tài khoản sau khi dùng xong trên máy tính công cộng'
        ],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Không chia sẻ mật khẩu, đặt mật khẩu mạnh và đăng xuất trên máy tính công cộng là các thói quen an toàn số cần thiết.'
      },
      {
        id: 'q-asg-3',
        type: 'true_false',
        prompt: 'Thông tin trên mạng Internet luôn luôn chính xác 100% và em có thể tin tưởng hoàn toàn mà không cần kiểm chứng.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // 'Sai'
        points: 2,
        explanation: 'Thông tin trên mạng rất phong phú nhưng cũng có nhiều thông tin sai lệch, cần đối chiếu với các nguồn uy tín.'
      },
      {
        id: 'q-asg-4',
        type: 'fill_in',
        prompt: 'Điền từ còn thiếu vào chỗ trống: Thiết bị dùng để kết nối các máy tính trong một mạng cục bộ (LAN) thường là bộ chia cổng hoặc thiết bị chuyển mạch có tên tiếng Anh là ___________.',
        correctAnswer: 'Switch',
        points: 2,
        explanation: 'Switch (bộ chuyển mạch) là thiết bị trung tâm kết nối các máy tính trong mạng có dây.'
      },
      {
        id: 'q-asg-5',
        type: 'essay',
        prompt: 'Em hãy nêu ít nhất 2 lợi ích của việc sử dụng Internet trong học tập và 1 biện pháp để tránh bị nghiện mạng xã hội.',
        points: 2,
        explanation: 'Học sinh trình bày rõ 2 lợi ích (tìm tài liệu, học trực tuyến...) và 1 biện pháp (lập thời gian biểu, hạn chế dùng điện thoại trước khi ngủ...)'
      }
    ]
  },
  {
    id: 'asg-tin6-02',
    title: 'Thực hành Tin học 6: Sơ đồ tư duy Mindmap và thông tin số',
    subjectId: 'tin-hoc',
    grade: 6,
    chapter: 'Chủ đề 4: Ứng dụng tin học',
    description: 'Thực hành tạo sơ đồ tư duy tóm tắt nội dung bài học, phân loại thiết bị và thông tin số.',
    durationMinutes: 45,
    dueDate: '2026-11-28T17:00:00Z',
    maxPoints: 10,
    maxAttempts: 3,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-tin-01',
    teacherName: 'Tổ trưởng Tin học',
    createdAt: '2026-10-27T09:30:00Z',
    questions: [
      {
        id: 'tin6-02-q1',
        type: 'single_choice',
        prompt: 'Sơ đồ tư duy (Mindmap) là phương pháp trình bày thông tin trực quan bằng cách sử dụng:',
        options: [
          'Từ khóa, hình ảnh, màu sắc và các đường nối phân nhánh',
          'Đoạn văn bản dài liên tục không ngắt đoạn',
          'Bảng tính toán số học phức tạp',
          'Các dãy số nhị phân 0 và 1'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Sơ đồ tư duy kết hợp từ khóa, màu sắc, nhánh nối và hình ảnh trực quan giúp não bộ ghi nhớ tốt hơn.'
      },
      {
        id: 'tin6-02-q2',
        type: 'multiple_choice',
        prompt: 'Những phần mềm nào sau đây hỗ trợ vẽ sơ đồ tư duy tiện lợi trên máy tính? (Chọn các phương án đúng)',
        options: ['MindManager', 'XMind', 'Coggle', 'Paintbrush đồ họa cổ điển'],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'MindManager, XMind, Coggle là các công cụ chuyên dụng vẽ sơ đồ tư duy.'
      },
      {
        id: 'tin6-02-q3',
        type: 'true_false',
        prompt: 'Trong sơ đồ tư duy, chủ đề trung tâm luôn được đặt ở giữa trang và các nhánh chính tỏa ra xung quanh.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo nguyên tắc lập sơ đồ tư duy của Tony Buzan.'
      },
      {
        id: 'tin6-02-q4',
        type: 'fill_in',
        prompt: 'Các nhánh tỏa ra trực tiếp từ chủ đề trung tâm của sơ đồ tư duy được gọi là nhánh ___________.',
        correctAnswer: 'chính',
        points: 2,
        explanation: 'Từ chủ đề trung tâm tỏa ra các nhánh chính (cấp 1).'
      },
      {
        id: 'tin6-02-q5',
        type: 'practice',
        prompt: 'Em hãy vẽ sơ đồ tư duy chủ đề "Các thành phần chính của máy tính điện tử" gồm 4 nhánh chính: Thiết bị vào, Thiết bị ra, Bộ xử lý trung tâm (CPU), Bộ nhớ (RAM, ROM). Sau đó nhập tóm tắt cấu trúc sơ đồ vào ô bên dưới.',
        points: 2,
        explanation: 'Học sinh trình bày tóm tắt: Chủ đề trung tâm: Máy tính điện tử. 4 nhánh: 1. Thiết bị vào (bàn phím, chuột); 2. Thiết bị ra (màn hình, loa, máy in); 3. CPU (bộ não xử lý); 4. Bộ nhớ (RAM lưu tạm, ROM lưu cố định).'
      }
    ]
  },
  // ==========================================
  // ÂM NHẠC KHỐI 6 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-nhac6-01',
    title: 'Bài tập Âm nhạc 6: Nhịp 2/4 và Bài đọc nhạc số 1',
    subjectId: 'am-nhac',
    grade: 6,
    description: 'Ôn tập lí thuyết số chỉ nhịp 2/4, giá trị các nốt nhạc, vạch nhịp và luyện đọc cao độ cơ bản Đô - Rê - Mi - Pha - Son.',
    durationMinutes: 15,
    dueDate: '2026-12-15T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-nhac-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-25T08:00:00Z',
    questions: [
      {
        id: 'nhac6-01-q1',
        type: 'single_choice',
        prompt: 'Trong số chỉ nhịp 2/4, con số 2 ở trên và con số 4 ở dưới có ý nghĩa gì?',
        options: [
          'Mỗi ô nhịp có 2 phách, mỗi phách có giá trị độ dài bằng một nốt đen',
          'Mỗi ô nhịp có 4 phách, mỗi phách có giá trị bằng 2 nốt móc đơn',
          'Mỗi ô nhịp có 2 nốt tròn, mỗi nốt dài 4 phách',
          'Mỗi ô nhịp có 4 phách mạnh liên tiếp không có phách nhẹ'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Nhịp 2/4: số 2 chỉ 2 phách trong một ô nhịp, số 4 quy định mỗi phách tương đương 1/4 nốt tròn (tức 1 nốt đen).'
      },
      {
        id: 'nhac6-01-q2',
        type: 'multiple_choice',
        prompt: 'Những nốt nhạc nào sau đây thuộc 5 bậc cao độ cơ bản đầu tiên trong bài đọc nhạc số 1? (Chọn các phương án đúng)',
        options: [
          'Nốt Đô (C)',
          'Nốt Rê (D)',
          'Nốt Mi (E)',
          'Nốt Si thăng (B#)'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Năm bậc âm cơ bản quen thuộc của bài tập đọc nhạc bước đầu là Đô - Rê - Mi - Pha - Son.'
      },
      {
        id: 'nhac6-01-q3',
        type: 'true_false',
        prompt: 'Dấu lặng đen là kí hiệu biểu thị thời gian ngừng nghỉ có giá trị trường độ bằng một nốt móc kép.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai. Dấu lặng đen có giá trị ngừng nghỉ đúng bằng thời gian ngân của một nốt đen (1 phách).'
      },
      {
        id: 'nhac6-01-q4',
        type: 'fill_in',
        prompt: 'Đường thẳng đứng kẻ vuông góc với các dòng kẻ của khuông nhạc để phân chia các ô nhịp được gọi là ________ nhịp.',
        correctAnswer: 'vạch',
        points: 2,
        explanation: 'Vạch nhịp phân cách giữa các ô nhịp.'
      },
      {
        id: 'nhac6-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu cảm nhận sau khi nghe bài hát "Tiếng chuông và ngọn cờ" của nhạc sĩ Phạm Tuyên và cho biết bài hát gửi gắm ước vọng gì về hòa bình và tình hữu nghị tuổi thơ.',
        points: 2,
        explanation: 'Học sinh nêu được: Giai điệu tươi vui rộn rã, tiếng chuông tượng trưng hòa bình, ngọn cờ bay tượng trưng cho tự do và đoàn kết bạn bè năm châu không phân biệt màu da.'
      }
    ]
  },
  {
    id: 'asg-nhac6-02',
    title: 'Bài tập Âm nhạc 6: Nhạc cụ gõ dân tộc & Dân ca Việt Nam',
    subjectId: 'am-nhac',
    grade: 6,
    description: 'Tìm hiểu các loại nhạc cụ gõ truyền thống Việt Nam, nhận biết giai điệu dân ca các vùng miền và bảo tồn di sản âm nhạc.',
    durationMinutes: 15,
    dueDate: '2026-12-20T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-nhac-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-26T08:00:00Z',
    questions: [
      {
        id: 'nhac6-02-q1',
        type: 'single_choice',
        prompt: 'Nhạc cụ gõ dân tộc nào làm bằng tre nứa hoặc gỗ, khi gõ hai thanh vào nhau tạo âm thanh giòn giã giữ nhịp cho bài hát?',
        options: [
          'Thanh phách',
          'Đàn bầu',
          'Đàn nhị',
          'Kèn sona'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Thanh phách là nhạc cụ tự thân vang bằng tre hoặc gỗ dùng gõ giữ nhịp phổ biến trong âm nhạc cổ truyền.'
      },
      {
        id: 'nhac6-02-q2',
        type: 'multiple_choice',
        prompt: 'Những thể loại nào sau đây là di sản dân ca truyền thống của các vùng miền Việt Nam? (Chọn các phương án đúng)',
        options: [
          'Dân ca Quan họ Bắc Ninh',
          'Hát then vùng Tây Bắc - Việt Bắc',
          'Dân ca Nam Bộ (các điệu Lý)',
          'Nhạc giao hưởng thính phòng châu Âu'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Quan họ Bắc Ninh, Hát then, và các điệu Lý Nam Bộ là các thể loại dân ca đặc sắc của Việt Nam.'
      },
      {
        id: 'nhac6-02-q3',
        type: 'true_false',
        prompt: 'Trống đế và song loan là những nhạc cụ gõ định âm có thể chơi được chính xác từng nốt nhạc trong thang âm phương Tây.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai. Trống đế và song loan là nhạc cụ gõ không định âm, chủ yếu đảm nhiệm chức năng điểm nhịp và tạo tiết tấu.'
      },
      {
        id: 'nhac6-02-q4',
        type: 'fill_in',
        prompt: 'Bài dân ca "Đi cấy" với nét nhạc rộn ràng mộc mạc là dân ca đặc sắc của vùng đất ________.',
        correctAnswer: 'thanh hóa',
        points: 2,
        explanation: 'Đi cấy là bài dân ca Thanh Hóa nổi tiếng.'
      },
      {
        id: 'nhac6-02-q5',
        type: 'essay',
        prompt: 'Em hãy viết 3 đến 5 dòng nêu trách nhiệm của học sinh trong việc giữ gìn và quảng bá các làn điệu dân ca truyền thống của quê hương.',
        points: 2,
        explanation: 'Học sinh nêu: Tích cực học hát dân ca, tham gia biểu diễn văn nghệ trường lớp, chia sẻ âm nhạc dân tộc trên mạng xã hội văn minh.'
      }
    ]
  },
  // ==========================================
  // MĨ THUẬT KHỐI 6 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-mt6-01',
    title: 'Bài tập Mĩ thuật 6: Họa tiết trang trí & Màu sắc ứng dụng',
    subjectId: 'mi-thuat',
    grade: 6,
    description: 'Nghiên cứu nguyên lí cấu tạo màu sắc, phối màu cơ bản và các quy luật sắp xếp họa tiết trang trí hình học ứng dụng.',
    durationMinutes: 15,
    dueDate: '2026-12-18T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-mt-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-27T08:00:00Z',
    questions: [
      {
        id: 'mt6-01-q1',
        type: 'single_choice',
        prompt: 'Trong mĩ thuật, bộ ba màu cơ bản (màu gốc) không thể pha ra từ bất kì màu nào khác là:',
        options: [
          'Đỏ, Vàng, Lam',
          'Đỏ, Cam, Lục',
          'Vàng, Tím, Trắng',
          'Lam, Nâu, Đen'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Ba màu gốc (cơ bản) chuẩn trong hội họa và trang trí là Đỏ, Vàng và Xanh lam.'
      },
      {
        id: 'mt6-01-q2',
        type: 'multiple_choice',
        prompt: 'Những nguyên lí sắp xếp họa tiết nào thường được áp dụng trong trang trí hình vuông, hình tròn và đường diềm? (Chọn các phương án đúng)',
        options: [
          'Nguyên lí đối xứng qua trục',
          'Nguyên lí lặp lại tuần hoàn',
          'Nguyên lí xen kẽ hình và màu',
          'Nguyên lí làm biến mất hoàn toàn điểm nhìn'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Đối xứng, lặp lại và xen kẽ là ba nguyên lí cơ bản hàng đầu trong trang trí ứng dụng.'
      },
      {
        id: 'mt6-01-q3',
        type: 'true_false',
        prompt: 'Khi trộn đều màu Đỏ với màu Vàng theo tỉ lệ thích hợp ta sẽ thu được màu Da cam.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Đỏ + Vàng = Da cam (màu nhị hợp).'
      },
      {
        id: 'mt6-01-q4',
        type: 'fill_in',
        prompt: 'Khi một họa tiết được nhân bản lặp đi lặp lại trải dài trên một dải băng hẹp thì dải trang trí đó gọi là đường ________.',
        correctAnswer: 'diềm',
        points: 2,
        explanation: 'Trang trí đường diềm là thể loại trang trí dải băng rất phổ biến.'
      },
      {
        id: 'mt6-01-q5',
        type: 'practice',
        prompt: 'Em hãy nêu ý tưởng cách điệu một hình ảnh từ thiên nhiên (như chiếc lá sen, bông cúc, cánh bướm) để làm họa tiết chính trang trí bìa sổ lưu niệm, nêu rõ gam màu chủ đạo em sẽ chọn.',
        points: 2,
        explanation: 'Học sinh nêu rõ: 1. Vật mẫu thiên nhiên lựa chọn; 2. Cách giản lược và nhấn mạnh nét đẹp đặc trưng; 3. Gam màu lựa chọn (gam nóng, gam lạnh hoặc tương phản).'
      }
    ]
  },
  {
    id: 'asg-mt6-02',
    title: 'Bài tập Mĩ thuật 6: Luật xa gần & Vẽ tranh đề tài quê hương',
    subjectId: 'mi-thuat',
    grade: 6,
    description: 'Nắm vững kiến thức phối cảnh xa gần, đường tầm mắt, điểm tụ và bố cục không gian ba chiều trên mặt phẳng hai chiều.',
    durationMinutes: 15,
    dueDate: '2026-12-22T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-mt-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-28T08:00:00Z',
    questions: [
      {
        id: 'mt6-02-q1',
        type: 'single_choice',
        prompt: 'Theo quy luật xa gần (luật phối cảnh), những vật thể ở gần người quan sát sẽ có đặc điểm gì so với vật cùng loại ở xa?',
        options: [
          'Vật ở gần trông to hơn, rõ chi tiết hơn và màu sắc đậm nét hơn',
          'Vật ở gần trông nhỏ hơn và mờ nhạt hơn vật ở xa',
          'Vật ở xa luôn có kích thước lớn hơn vật ở gần',
          'Khoảng cách không ảnh hưởng đến kích thước và độ rõ nét'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Quy luật xa gần: Gần to, rõ, đậm; xa nhỏ, mờ, nhạt.'
      },
      {
        id: 'mt6-02-q2',
        type: 'multiple_choice',
        prompt: 'Trong vẽ tranh phong cảnh, không gian bức tranh thường được chia thành những mảng không gian nào? (Chọn các phương án đúng)',
        options: [
          'Tiền cảnh (mảng không gian gần mắt nhất)',
          'Trung cảnh (mảng không gian giữa)',
          'Hậu cảnh (mảng không gian ở xa nhất)',
          'Cận ảnh siêu âm'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Bố cục cảnh vật cơ bản gồm tiền cảnh, trung cảnh và hậu cảnh.'
      },
      {
        id: 'mt6-02-q3',
        type: 'true_false',
        prompt: 'Điểm tụ trong luật phối cảnh là điểm mà các đường song song chạy dài vào chiều sâu dường như gặp nhau trên đường chân trời.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo định nghĩa điểm tụ (vanishing point) trong phối cảnh tuyến tính.'
      },
      {
        id: 'mt6-02-q4',
        type: 'fill_in',
        prompt: 'Đường phân chia giữa mặt đất (hoặc mặt nước) với bầu trời được gọi là đường chân ________ (hoặc đường tầm mắt).',
        correctAnswer: 'trời',
        points: 2,
        explanation: 'Đường chân trời (horizon line).'
      },
      {
        id: 'mt6-02-q5',
        type: 'essay',
        prompt: 'Em hãy viết 4-6 dòng mô tả bố cục bức tranh phong cảnh "Cánh đồng lúa quê hương Mỹ Hòa vào mùa gặt" với đầy đủ tiền cảnh, trung cảnh và hậu cảnh.',
        points: 2,
        explanation: 'Học sinh mô tả: Tiền cảnh (bờ mương, hàng cây thốt nốt, máy gặt đập); Trung cảnh (cánh đồng lúa vàng trải rộng rực rỡ, nông dân bó lúa); Hậu cảnh (dãy núi xa mờ trong ánh nắng hoàng hôn, bầu trời xanh).'
      }
    ]
  },
  // ==========================================
  // GIÁO DỤC THỂ CHẤT KHỐI 6 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-gdtc6-01',
    title: 'Bài tập Giáo dục thể chất 6: Đội hình đội ngũ & Khởi động thể dục',
    subjectId: 'giao-duc-the-chat',
    grade: 6,
    description: 'Nắm vững các khẩu lệnh đội hình đội ngũ (tập hợp hàng dọc, hàng ngang, quay phải, quay trái) và các động tác khởi động chung.',
    durationMinutes: 15,
    dueDate: '2026-12-15T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdtc-01',
    teacherName: 'Tổ GDTC',
    createdAt: '2026-10-25T10:00:00Z',
    questions: [
      {
        id: 'gdtc6-01-q1',
        type: 'single_choice',
        prompt: 'Khi thực hiện động tác "Quay bên phải", gót chân và mũi chân nào được dùng làm trụ quay?',
        options: [
          'Lấy gót chân phải và mũi chân trái làm trụ quay sang phải một góc 90 độ',
          'Lấy gót chân trái và mũi chân phải làm trụ quay sang phải',
          'Nhảy bật cả hai chân xoay sang phải 180 độ',
          'Lấy cả hai mũi chân làm trụ quay tự do'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Khẩu lệnh "Bên phải - Quay!": Lấy gót chân phải và mũi chân trái làm trụ, quay người 90 độ sang phải rồi thu chân trái về.'
      },
      {
        id: 'gdtc6-01-q2',
        type: 'multiple_choice',
        prompt: 'Các bài tập khởi động chung trước giờ tập luyện thể dục thể thao có tác dụng gì? (Chọn các phương án đúng)',
        options: [
          'Làm ấm cơ thể, tăng thân nhiệt và lưu thông máu',
          'Bôi trơn các bao khớp, tăng độ đàn hồi của cơ bắp',
          'Giúp phòng ngừa chuột rút và chấn thương trong vận động',
          'Làm cơ thể suy kiệt hoàn toàn trước khi thi đấu'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Khởi động giúp làm ấm cơ, bôi trơn khớp và phòng tránh chấn thương.'
      },
      {
        id: 'gdtc6-01-q3',
        type: 'true_false',
        prompt: 'Khi nghe khẩu lệnh "Nghỉ!", học sinh dồn trọng tâm đều sang một chân, chân kia hơi chùng gối, thân người thả lỏng tự nhiên.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo kĩ thuật điều lệnh đội hình đội ngũ tư thế "Nghỉ".'
      },
      {
        id: 'gdtc6-01-q4',
        type: 'fill_in',
        prompt: 'Khẩu lệnh điều khiển đội hình gồm hai phần chính: dự lệnh và ________ lệnh.',
        correctAnswer: 'động',
        points: 2,
        explanation: 'Dự lệnh và động lệnh (ví dụ: "Đằng sau" là dự lệnh, "Quay!" là động lệnh).'
      },
      {
        id: 'gdtc6-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu lợi ích của việc duy trì tập thể dục buổi sáng và thể dục giữa giờ đối với sức khỏe thể chất và tinh thần học tập của học sinh.',
        points: 2,
        explanation: 'Học sinh nêu: Thúc đẩy trao đổi chất, giải tỏa căng thẳng sau các tiết học tĩnh, nâng cao thể lực, rèn luyện tính kỉ luật và tinh thần sảng khoái suốt ngày dài.'
      }
    ]
  },
  {
    id: 'asg-gdtc6-02',
    title: 'Bài tập Giáo dục thể chất 6: Kĩ thuật chạy cự li ngắn 60m',
    subjectId: 'giao-duc-the-chat',
    grade: 6,
    description: 'Bốn giai đoạn kĩ thuật chạy cự li ngắn: Xuất phát, Chạy lao sau xuất phát, Chạy giữa quãng và Về đích.',
    durationMinutes: 15,
    dueDate: '2026-12-20T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdtc-01',
    teacherName: 'Tổ GDTC',
    createdAt: '2026-10-26T10:00:00Z',
    questions: [
      {
        id: 'gdtc6-02-q1',
        type: 'single_choice',
        prompt: 'Trong chạy cự li ngắn, các hiệu lệnh xuất phát cao lần lượt theo thứ tự nào?',
        options: [
          '"Vào chỗ!" -> "Sẵn sàng!" -> "Chạy!" (hoặc phát lệnh bằng súng/còi)',
          '"Chạy ngay!" -> "Vào chỗ!" -> "Dừng lại!"',
          '"Sẵn sàng!" -> "Vào chỗ!" -> "Nghỉ!"',
          'Chỉ cần một lệnh "Chạy!" duy nhất'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Quy trình xuất phát chạy cự li ngắn gồm 3 hiệu lệnh chuẩn: Vào chỗ - Sẵn sàng - Chạy.'
      },
      {
        id: 'gdtc6-02-q2',
        type: 'multiple_choice',
        prompt: 'Những sai lầm thường gặp khi về đích trong chạy cự li ngắn là: (Chọn các phương án đúng)',
        options: [
          'Giảm tốc độ trước khi chạm vạch đích',
          'Nhảy bật lên cao để chạm dây đích thay vì chạy lao qua',
          'Dừng lại đột ngột ngay sau khi chạm vạch đích gây ngã nguy hiểm',
          'Chạy lao thẳng ngực hoặc vai qua vạch đích'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Giảm tốc sớm, nhảy bật lên hoặc dừng đột ngột là các lỗi sai kĩ thuật chạy về đích.'
      },
      {
        id: 'gdtc6-02-q3',
        type: 'true_false',
        prompt: 'Sau khi chạy hết tốc lực về đích, học sinh nên lập tức ngồi bệt xuống đất và uống nhiều nước lạnh để hạ nhiệt nhanh.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai. Ngồi bệt và uống nước đá lạnh đột ngột dễ gây sốc nhiệt, trụy tim mạch; cần đi bộ thả lỏng hít thở sâu.'
      },
      {
        id: 'gdtc6-02-q4',
        type: 'fill_in',
        prompt: 'Khi chạy giữa quãng, người chạy cần tiếp xúc mặt đường bằng nửa trước bàn ________ để đạt tốc độ tối đa.',
        correctAnswer: 'chân',
        points: 2,
        explanation: 'Nửa trước bàn chân (chạy bằng mũi bàn chân).'
      },
      {
        id: 'gdtc6-02-q5',
        type: 'essay',
        prompt: 'Tại sao sau khi vận động thể thao với cường độ cao, chúng ta cần phải thực hiện các động tác hồi tĩnh (thả lỏng, rũ cơ bắp, điều hòa nhịp thở)?',
        points: 2,
        explanation: 'Học sinh phân tích: Giúp tim mạch và huyết áp dần trở lại trạng thái bình thường, đào thải axit lactic tích tụ trong cơ, chống đau mỏi cơ bắp và tránh hiện tượng choáng ngất do máu dồn về các chi.'
      }
    ]
  },
  // ==========================================
  // HOẠT ĐỘNG TRẢI NGHIỆM KHỐI 6 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-hdtn6-01',
    title: 'Bài tập Hoạt động trải nghiệm 6: Thích ứng với môi trường THCS',
    subjectId: 'hoat-dong-trai-nghiem',
    grade: 6,
    description: 'Nhận diện sự thay đổi khi bước vào cấp THCS, xây dựng thời gian biểu khoa học và thiết lập mối quan hệ hòa đồng với bạn bè mới.',
    durationMinutes: 15,
    dueDate: '2026-12-16T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-hdtn-01',
    teacherName: 'Tổ Hoạt động Trải nghiệm',
    createdAt: '2026-10-25T10:30:00Z',
    questions: [
      {
        id: 'hdtn6-01-q1',
        type: 'single_choice',
        prompt: 'Khi gặp khó khăn trong việc thích nghi với phương pháp học tập nhiều thầy cô ở trường THCS, em nên làm gì?',
        options: [
          'Chủ động trao đổi với thầy cô bộ môn, thầy cô chủ nhiệm và chia sẻ cùng bạn bè, cha mẹ',
          'Giấu kín trong lòng, sợ bị chê cười và bỏ bê bài tập',
          'Nghỉ học ở nhà để tránh áp lực',
          'Đổ lỗi cho thầy cô dạy khó hiểu'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Chủ động giao tiếp, tìm kiếm sự hỗ trợ từ thầy cô và gia đình là giải pháp tích cực nhất.'
      },
      {
        id: 'hdtn6-01-q2',
        type: 'multiple_choice',
        prompt: 'Một thời gian biểu cá nhân hợp lí cần đảm bảo cân đối giữa những hoạt động nào? (Chọn các phương án đúng)',
        options: [
          'Thời gian học tập trên lớp và tự học ở nhà',
          'Thời gian vui chơi giải trí, thể dục thể thao rèn luyện sức khỏe',
          'Thời gian ngủ nghỉ đủ giấc và phụ giúp việc gia đình',
          'Dành toàn bộ 24 giờ trong ngày để chơi game trên điện thoại'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Thời gian biểu cân đối giữa học tập, thể chất, giấc ngủ và giúp đỡ người thân.'
      },
      {
        id: 'hdtn6-01-q3',
        type: 'true_false',
        prompt: 'Biết lắng nghe và tôn trọng sự khác biệt của bạn bè là chìa khóa để xây dựng tình bạn gắn bó, lành mạnh trong trường học.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Tôn trọng sự khác biệt tạo nên môi trường học đường thân thiện.'
      },
      {
        id: 'hdtn6-01-q4',
        type: 'fill_in',
        prompt: 'Việc tự giác sắp xếp góc học tập và tự giác hoàn thành nhiệm vụ bài vở được gọi là tính tự ________ trong học tập.',
        correctAnswer: 'chủ',
        points: 2,
        explanation: 'Tính tự chủ (hoặc tự giác).'
      },
      {
        id: 'hdtn6-01-q5',
        type: 'essay',
        prompt: 'Em hãy viết một đoạn văn ngắn (4-6 dòng) giới thiệu về bản thân với các bạn trong lớp mới: Sở thích, điểm mạnh và một mục tiêu phấn đấu trong năm học lớp 6 tại THCS Mỹ Hòa.',
        points: 2,
        explanation: 'Học sinh trình bày tự tin: Giới thiệu họ tên; sở thích tích cực (đọc sách, thể thao, vẽ tranh); điểm mạnh (hòa đồng, cẩn thận); mục tiêu đạt học sinh giỏi/học sinh xuất sắc và tham gia tích cực phong trào Đội.'
      }
    ]
  },
  {
    id: 'asg-hdtn6-02',
    title: 'Bài tập Hoạt động trải nghiệm 6: Xây dựng Văn hóa Học đường',
    subjectId: 'hoat-dong-trai-nghiem',
    grade: 6,
    description: 'Quy tắc ứng xử văn minh trong trường học, phòng chống bạo lực học đường và xây dựng lớp học hạnh phúc.',
    durationMinutes: 15,
    dueDate: '2026-12-21T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-hdtn-01',
    teacherName: 'Tổ Hoạt động Trải nghiệm',
    createdAt: '2026-10-26T10:30:00Z',
    questions: [
      {
        id: 'hdtn6-02-q1',
        type: 'single_choice',
        prompt: 'Hành động nào sau đây thể hiện nét đẹp văn hóa ứng xử của người học sinh THCS Mỹ Hòa?',
        options: [
          'Khoanh tay lễ phép chào thầy cô, nhân viên nhà trường và khách đến thăm trường',
          'Nói tục, chửi thề khi trò chuyện với bạn bè ở hành lang',
          'Khắc tên, vẽ bậy lên mặt bàn và tường lớp học',
          'Xả rác bừa bãi xuống sân trường sau giờ ra chơi'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Lễ phép chào hỏi thể hiện văn hóa tôn sư trọng đạo và tác phong học sinh gương mẫu.'
      },
      {
        id: 'hdtn6-02-q2',
        type: 'multiple_choice',
        prompt: 'Khi chứng kiến một bạn trong lớp bị các bạn khác bắt nạt hoặc cô lập, em nên làm gì? (Chọn các phương án đúng)',
        options: [
          'Kịp thời báo ngay cho thầy cô chủ nhiệm hoặc giám thị nhà trường',
          'An ủi, động viên và rủ bạn cùng tham gia hoạt động nhóm',
          'Lên tiếng can ngăn với thái độ bình tĩnh, bảo vệ bạn đúng mực',
          'Đứng ngoài hò reo, quay video phát tán lên mạng xã hội để câu tương tác'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Cần báo thầy cô, động viên bạn và can ngăn; tuyệt đối không cổ xúy bạo lực mạng.'
      },
      {
        id: 'hdtn6-02-q3',
        type: 'true_false',
        prompt: 'Bạo lực học đường chỉ bao gồm hành vi đánh đập thân thể, không bao gồm hành vi xúc phạm danh dự, cô lập bạn trên mạng xã hội.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai. Bạo lực tinh thần, bạo lực ngôn ngữ và bạo lực mạng (cyberbullying) cũng là các hình thức bạo lực học đường nguy hiểm.'
      },
      {
        id: 'hdtn6-02-q4',
        type: 'fill_in',
        prompt: 'Mô hình trường học thân thiện, học sinh tích cực hướng tới mục tiêu xây dựng ngôi trường trở thành trường học hạnh ________.',
        correctAnswer: 'phúc',
        points: 2,
        explanation: 'Trường học hạnh phúc.'
      },
      {
        id: 'hdtn6-02-q5',
        type: 'essay',
        prompt: 'Theo em, mỗi học sinh cần làm những việc cụ thể gì để giữ gìn vệ sinh chung và bảo vệ cảnh quan trường lớp luôn xanh - sạch - đẹp?',
        points: 2,
        explanation: 'Học sinh nêu: Bỏ rác đúng nơi quy định, phân loại rác tái chế; chăm sóc bồn hoa cây cảnh của lớp; không viết vẽ bậy lên tường, tắt điện quạt khi ra khỏi phòng học.'
      }
    ]
  },
  // ==========================================
  // GIÁO DỤC ĐỊA PHƯƠNG KHỐI 6 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-gddp6-01',
    title: 'Bài tập Giáo dục địa phương 6: Danh lam thắng cảnh & Di tích lịch sử quê hương',
    subjectId: 'giao-duc-dia-phuong',
    grade: 6,
    description: 'Tìm hiểu các di tích lịch sử văn hóa, danh lam thắng cảnh và niềm tự hào truyền thống quê hương An Giang/Mỹ Hòa.',
    durationMinutes: 15,
    dueDate: '2026-12-17T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gddp-01',
    teacherName: 'Tổ Văn',
    createdAt: '2026-10-25T11:00:00Z',
    questions: [
      {
        id: 'gddp6-01-q1',
        type: 'single_choice',
        prompt: 'Khu di tích khảo cổ học nổi tiếng nào tại An Giang được công nhận là Di tích quốc gia đặc biệt, minh chứng cho nền văn hóa cổ phát triển rực rỡ từ thế kỉ I đến VII?',
        options: [
          'Khu di tích Óc Eo - Ba Thê',
          'Khu di tích Địa đạo Củ Chi',
          'Quần thể danh thắng Tràng An',
          'Thành nhà Hồ'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Văn hóa Óc Eo tại vùng Ba Thê (huyện Thoại Sơn, tỉnh An Giang) là di sản khảo cổ học vô giá.'
      },
      {
        id: 'gddp6-01-q2',
        type: 'multiple_choice',
        prompt: 'Những danh lam thắng cảnh và di tích lịch sử nổi tiếng nào thuộc vùng đất An Giang? (Chọn các phương án đúng)',
        options: [
          'Rừng tràm Trà Sư với hệ sinh thái ngập nước đặc trưng',
          'Khu du lịch Núi Cấm (Thiên Cấm Sơn) trong dãy Thất Sơn',
          'Miếu Bà Chúa Xứ Núi Sam (TP. Châu Đốc)',
          'Hồ Ba Bể trên núi đá vôi'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Trà Sư, Núi Cấm và Miếu Bà Chúa Xứ Núi Sam là các địa danh nổi tiếng của An Giang.'
      },
      {
        id: 'gddp6-01-q3',
        type: 'true_false',
        prompt: 'Dãy Thất Sơn (Bảy Núi) là vùng bán sơn địa độc đáo của đồng bằng sông Cửu Long trải dài trên địa bàn tỉnh An Giang.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Vùng Thất Sơn gồm 7 ngọn núi huyền bí nổi tiếng miền Tây Nam Bộ.'
      },
      {
        id: 'gddp6-01-q4',
        type: 'fill_in',
        prompt: 'Cây đặc sản biểu tượng gắn liền với đời sống văn hóa và cảnh quan làng quê An Giang là cây thốt ________.',
        correctAnswer: 'nốt',
        points: 2,
        explanation: 'Cây thốt nốt.'
      },
      {
        id: 'gddp6-01-q5',
        type: 'essay',
        prompt: 'Em hãy viết đoạn văn (4-6 dòng) nêu cảm nghĩ về vẻ đẹp mùa nước nổi ở miền Tây Nam Bộ và tình cảm của em đối với quê hương.',
        points: 2,
        explanation: 'Học sinh trình bày: Mùa nước nổi mang phù sa màu mỡ bồi đắp đồng ruộng, mang lại nguồn thủy sản cá tôm dồi dào, bông điên điển vàng rực; thể hiện tình yêu gắn bó tha thiết với mảnh đất và con người phương Nam chân chất nghĩa tình.'
      }
    ]
  },
  {
    id: 'asg-gddp6-02',
    title: 'Bài tập Giáo dục địa phương 6: Lễ hội truyền thống & Làng nghề quê hương',
    subjectId: 'giao-duc-dia-phuong',
    grade: 6,
    description: 'Khám phá các lễ hội văn hóa đa dân tộc (Kinh, Khmer, Chăm, Hoa) và các làng nghề thủ công truyền thống ở địa phương.',
    durationMinutes: 15,
    dueDate: '2026-12-22T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gddp-01',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-26T11:00:00Z',
    questions: [
      {
        id: 'gddp6-02-q1',
        type: 'single_choice',
        prompt: 'Lễ hội Đua bò Bảy Núi sôi nổi hào hứng là nét văn hóa đặc sắc trong dịp Tết Dolta truyền thống của đồng bào dân tộc nào?',
        options: [
          'Đồng bào dân tộc Khmer',
          'Đồng bào dân tộc Tày',
          'Đồng bào dân tộc Mông',
          'Đồng bào dân tộc Dao'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Hội đua bò Bảy Núi là lễ hội thể thao - văn hóa độc đáo của đồng bào Khmer Nam Bộ.'
      },
      {
        id: 'gddp6-02-q2',
        type: 'multiple_choice',
        prompt: 'Những làng nghề truyền thống nổi tiếng nào sau đây gắn liền với tỉnh An Giang? (Chọn các phương án đúng)',
        options: [
          'Làng nghề dệt thổ cẩm Chăm (Châu Phong - Tân Châu)',
          'Nghề nấu đường thốt nốt truyền thống (Tri Tôn, Tịnh Biên)',
          'Làng nghề làm mắm Châu Đốc nổi tiếng cả nước',
          'Nghề đúc đồng Ý Yên'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Dệt thổ cẩm Chăm, nấu đường thốt nốt và làm mắm Châu Đốc là những đặc sản truyền thống tiêu biểu của An Giang.'
      },
      {
        id: 'gddp6-02-q3',
        type: 'true_false',
        prompt: 'Lễ hội Vía Bà Chúa Xứ Núi Sam đã được Bộ Văn hóa, Thể thao và Du lịch công nhận là Di sản văn hóa phi vật thể quốc gia.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo hồ sơ di sản văn hóa phi vật thể cấp quốc gia.'
      },
      {
        id: 'gddp6-02-q4',
        type: 'fill_in',
        prompt: 'Loại lụa tơ tằm mềm mại, mát mẻ nổi tiếng xứ Tân Châu - An Giang từng được mệnh danh là nữ hoàng tơ lụa gọi là Lãnh Mỹ ________.',
        correctAnswer: 'a',
        points: 2,
        explanation: 'Lãnh Mỹ A (nhuộm bằng mủ trái mặc nưa).'
      },
      {
        id: 'gddp6-02-q5',
        type: 'essay',
        prompt: 'Em hãy viết 4-5 dòng nêu trách nhiệm của thế hệ trẻ trong việc giữ gìn và quảng bá các sản phẩm làng nghề truyền thống của quê hương đến với bạn bè trong và ngoài nước.',
        points: 2,
        explanation: 'Học sinh nêu: Trân trọng sản phẩm thủ công quê hương, tìm hiểu quy trình sản xuất của các nghệ nhân, tích cực giới thiệu làng nghề qua các phương tiện truyền thông số và du lịch học đường văn minh.'
      }
    ]
  }
];



