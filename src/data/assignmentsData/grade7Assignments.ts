import { Assignment } from '../../types';

export const GRADE_7_ASSIGNMENTS: Assignment[] = [
  // ==========================================
  // TIẾNG ANH KHỐI 7 (GLOBAL SUCCESS / CHUẨN GDPT 2018)
  // ==========================================
  {
    id: 'asg-eng7-01',
    title: 'Unit 1: Hobbies - Verbs of Liking & Present Simple',
    subjectId: 'tieng-anh',
    grade: 7,
    chapter: 'Unit 1: Hobbies',
    description: 'Luyện tập từ vựng về các sở thích, cấu trúc động từ chỉ sự yêu thích (like, love, enjoy, hate) + V-ing.',
    durationMinutes: 45,
    dueDate: '2026-11-26T23:59:00Z',
    maxPoints: 10,
    maxAttempts: 3,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-eng-02',
    teacherName: 'Tổ Tiếng Anh',
    createdAt: '2026-10-25T08:30:00Z',
    questions: [
      {
        id: 'eng7-01-q1',
        type: 'single_choice',
        prompt: 'Choose the correct form: My sister really enjoys ________ teddy bears and dolls from different countries.',
        options: ['collecting', 'collect', 'collected', 'to collecting'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Sau động từ chỉ sự yêu thích như "enjoy" ta dùng danh động từ V-ing: enjoy collecting.'
      },
      {
        id: 'eng7-01-q2',
        type: 'multiple_choice',
        prompt: 'Which of the following activities are outdoor hobbies? (Select all correct answers)',
        options: ['Gardening', 'Cycling in the park', 'Playing video games', 'Mountain climbing'],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Gardening (làm vườn), Cycling (đạp xe), Mountain climbing (leo núi) là các hoạt động ngoài trời. Playing video games là sở thích trong nhà.'
      },
      {
        id: 'eng7-01-q3',
        type: 'true_false',
        prompt: 'The sentence "Does your father likes doing judo in his free time?" is grammatically correct.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai vì trong câu hỏi thì Hiện tại đơn với trợ động từ "Does", động từ chính phải ở dạng nguyên thể: "Does your father like...".'
      },
      {
        id: 'eng7-01-q4',
        type: 'fill_in',
        prompt: 'Complete the sentence with the correct form of the word in brackets: Horse-riding is an ________ (expense) hobby that not many people can afford.',
        correctAnswer: 'expensive',
        points: 2,
        explanation: 'Tính từ của "expense" là "expensive" (đắt đỏ).'
      },
      {
        id: 'eng7-01-q5',
        type: 'essay',
        prompt: 'Write a short paragraph (4-6 sentences) about your hobby: what it is, when you started it, who you share it with, and why you love it.',
        points: 2,
        explanation: 'Gợi ý: My favourite hobby is reading books. I started it when I was seven years old. I often read detective stories with my best friend at weekends. It helps me broaden my knowledge and relax after school.'
      }
    ]
  },
  {
    id: 'asg-eng7-02',
    title: 'Unit 2: Healthy Living - Simple Sentences & Health Tips',
    subjectId: 'tieng-anh',
    grade: 7,
    chapter: 'Unit 2: Healthy Living',
    description: 'Thực hành từ vựng về sức khỏe, các bệnh thông thường (flu, sunburn, allergy) và cấu trúc câu đơn.',
    durationMinutes: 40,
    dueDate: '2026-11-28T23:59:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-eng-02',
    teacherName: 'Tổ Tiếng Anh',
    createdAt: '2026-10-27T09:30:00Z',
    questions: [
      {
        id: 'eng7-02-q1',
        type: 'single_choice',
        prompt: 'You should wear a hat and apply suncream to avoid getting ________ when going to the beach in summer.',
        options: ['sunburn', 'stomach ache', 'earache', 'flu'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Sunburn (cháy nắng) là tình trạng da bị tổn thương do tiếp xúc nhiều với ánh nắng mặt trời.'
      },
      {
        id: 'eng7-02-q2',
        type: 'multiple_choice',
        prompt: 'Which habits are good for maintaining a healthy lifestyle? (Select all correct answers)',
        options: [
          'Eating plenty of fresh vegetables and fruits',
          'Drinking at least 2 litres of water daily',
          'Staying up late playing mobile games until midnight',
          'Doing morning exercises regularly'
        ],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Ăn rau quả, uống đủ nước và tập thể dục là thói quen sống khỏe. Thức khuya chơi game gây hại cho sức khỏe.'
      },
      {
        id: 'eng7-02-q3',
        type: 'true_false',
        prompt: 'A simple sentence in English must have at least one independent clause with a subject and a verb.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Một câu đơn chuẩn trong tiếng Anh gồm tối thiểu một mệnh đề độc lập có đầy đủ chủ ngữ và vị ngữ.'
      },
      {
        id: 'eng7-02-q4',
        type: 'fill_in',
        prompt: 'Fill in the blank with the suitable coordinating conjunction (and / or / but / so): Lan has a toothache, ________ she is going to see the dentist this afternoon.',
        correctAnswer: 'so',
        points: 2,
        explanation: 'Liên từ "so" (vì vậy, do đó) dùng để diễn tả kết quả của mệnh đề trước.'
      },
      {
        id: 'eng7-02-q5',
        type: 'essay',
        prompt: 'Give 3 pieces of practical health advice for middle school students to prevent eye strain when using computers.',
        points: 2,
        explanation: 'Gợi ý: 1. Follow the 20-20-20 rule (look at something 20 feet away for 20 seconds every 20 minutes); 2. Keep a proper distance (about 50 cm) from the screen; 3. Ensure sufficient room lighting.'
      }
    ]
  },

  // ==========================================
  // TOÁN HỌC KHỐI 7
  // ==========================================
  {
    id: 'asg-toan7-01',
    title: 'Đại số 7: Các phép tính với số hữu tỉ',
    subjectId: 'toan',
    grade: 7,
    chapter: 'Chương 1: Số hữu tỉ',
    description: 'Thực hiện thành thạo các phép cộng, trừ, nhân, chia và luỹ thừa của số hữu tỉ; giải phương trình tìm x.',
    durationMinutes: 45,
    dueDate: '2026-11-26T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-toan-02',
    teacherName: 'Tổ Toán - Tin',
    createdAt: '2026-10-26T14:00:00Z',
    questions: [
      {
        id: 'toan7-01-q1',
        type: 'single_choice',
        prompt: 'Kết quả của phép tính (-2/3) + (1/6) là:',
        options: ['-1/2', '1/2', '-3/6', '-1/6'],
        correctAnswer: 0,
        points: 2,
        explanation: '(-2/3) + (1/6) = (-4/6) + (1/6) = -3/6 = -1/2.'
      },
      {
        id: 'toan7-01-q2',
        type: 'multiple_choice',
        prompt: 'Những số nào sau đây thuộc tập hợp số hữu tỉ Q? (Chọn các phương án đúng)',
        options: ['-0,75', '5/8', '0', '√2 (căn bậc hai số học của 2)'],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: '-0,75 = -3/4; 5/8; 0 = 0/1 đều biểu diễn được dưới dạng phân số a/b (b khác 0). √2 là số vô tỉ.'
      },
      {
        id: 'toan7-01-q3',
        type: 'true_false',
        prompt: 'Mọi số tự nhiên đều là số hữu tỉ.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Mọi số tự nhiên n đều có thể biểu diễn dưới dạng n/1 nên đều là số hữu tỉ.'
      },
      {
        id: 'toan7-01-q4',
        type: 'fill_in',
        prompt: 'Tìm giá trị của x biết: x - 1/4 = 3/4. Nhập giá trị số nguyên của x:',
        correctAnswer: '1',
        points: 2,
        explanation: 'x = 3/4 + 1/4 = 4/4 = 1.'
      },
      {
        id: 'toan7-01-q5',
        type: 'essay',
        prompt: 'Trình bày các bước tính giá trị biểu thức: A = (-1/2)^2 + (3/4) * (2/3). Viết rõ từng bước biến đổi.',
        points: 2,
        explanation: 'A = 1/4 + 6/12 = 1/4 + 1/2 = 1/4 + 2/4 = 3/4 (hoặc 0,75).'
      }
    ]
  },
  {
    id: 'asg-toan7-02',
    title: 'Hình học 7: Các trường hợp bằng nhau của hai tam giác',
    subjectId: 'toan',
    grade: 7,
    chapter: 'Chương 4: Tam giác bằng nhau',
    description: 'Nắm vững 3 trường hợp bằng nhau c-c-c, c-g-c, g-c-g và các trường hợp đặc biệt của tam giác vuông.',
    durationMinutes: 45,
    dueDate: '2026-11-29T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-toan-02',
    teacherName: 'Tổ Toán - Tin',
    createdAt: '2026-10-27T15:00:00Z',
    questions: [
      {
        id: 'toan7-02-q1',
        type: 'single_choice',
        prompt: 'Cho tam giác ABC và tam giác MNP có AB = MN, AC = MP, BC = NP. Ta kết luận hai tam giác bằng nhau theo trường hợp nào?',
        options: ['cạnh - cạnh - cạnh (c-c-c)', 'cạnh - góc - cạnh (c-g-c)', 'góc - cạnh - góc (g-c-g)', 'góc - góc - góc'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Cả 3 cạnh tương ứng bằng nhau nên hai tam giác bằng nhau theo trường hợp cạnh - cạnh - cạnh.'
      },
      {
        id: 'toan7-02-q2',
        type: 'multiple_choice',
        prompt: 'Những trường hợp nào sau đây là điều kiện để hai tam giác vuông bằng nhau? (Chọn các phương án đúng)',
        options: [
          'Cạnh huyền - góc nhọn',
          'Cạnh huyền - cạnh góc vuông',
          'Hai cạnh góc vuông bằng nhau',
          'Ba góc tương ứng bằng nhau'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Tam giác vuông có các trường hợp bằng nhau đặc biệt: cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông, và 2 cạnh góc vuông.'
      },
      {
        id: 'toan7-02-q3',
        type: 'true_false',
        prompt: 'Trong trường hợp cạnh - góc - cạnh (c-g-c), góc bằng nhau bắt buộc phải là góc xen giữa hai cạnh bằng nhau đó.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Nếu góc không xen giữa thì hai tam giác chưa chắc bằng nhau.'
      },
      {
        id: 'toan7-02-q4',
        type: 'fill_in',
        prompt: 'Cho tam giác ABC có góc A = 70°, góc B = 50°. Số đo của góc C là bao nhiêu độ? (Chỉ nhập số)',
        correctAnswer: '60',
        points: 2,
        explanation: 'Tổng 3 góc bằng 180° => Góc C = 180° - 70° - 50° = 60°.'
      },
      {
        id: 'toan7-02-q5',
        type: 'essay',
        prompt: 'Cho đoạn thẳng AB có trung điểm M. Đường thẳng d vuông góc với AB tại M (đường trung trực của AB). Lấy điểm P bất kỳ trên d. Chứng minh PA = PB.',
        points: 2,
        explanation: 'Xét hai tam giác vuông PMA và PMB có: PM chung, MA = MB (M là trung điểm), góc PMA = góc PMB = 90°. Do đó tam giác PMA = tam giác PMB (hai cạnh góc vuông) => PA = PB.'
      }
    ]
  },

  // ==========================================
  // NGỮ VĂN KHỐI 7
  // ==========================================
  {
    id: 'asg-van7-01',
    title: 'Đọc hiểu Ngữ văn 7: Tục ngữ và Thành ngữ về thiên nhiên & lao động',
    subjectId: 'van',
    grade: 7,
    chapter: 'Bài 1: Bầu trời tuổi thơ & Tục ngữ',
    description: 'Tìm hiểu giá trị nhận thức, bài học kinh nghiệm sản xuất và vẻ đẹp ngôn từ cô đọng trong ca dao, tục ngữ.',
    durationMinutes: 45,
    dueDate: '2026-11-27T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-van-02',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-26T11:00:00Z',
    questions: [
      {
        id: 'van7-01-q1',
        type: 'single_choice',
        prompt: 'Câu tục ngữ "Đêm tháng năm chưa nằm đã sáng, Ngày tháng mười chưa cười đã tối" phản ánh quy luật tự nhiên nào?',
        options: [
          'Sự chênh lệch độ dài ngày và đêm giữa mùa hạ và mùa đông ở bán cầu Bắc',
          'Hiện tượng nhật thực và nguyệt thực',
          'Thời tiết mưa bão mùa hè',
          'Sự chuyển dịch của mặt trăng'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Do độ nghiêng của trục Trái Đất, mùa hạ (tháng 5 âm lịch) ngày dài đêm ngắn, mùa đông (tháng 10 âm lịch) ngày ngắn đêm dài.'
      },
      {
        id: 'van7-01-q2',
        type: 'multiple_choice',
        prompt: 'Những đặc điểm nghệ thuật nào sau đây là nét đặc sắc của thể loại tục ngữ? (Chọn các phương án đúng)',
        options: [
          'Ngắn gọn, súc tích, dung lượng câu ngắn',
          'Thường có vần, có nhịp điệu cân đối dễ nhớ',
          'Giàu hình ảnh ẩn dụ, so sánh sinh động',
          'Có cốt truyện ly kỳ và nhiều tuyến nhân vật đối lập'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Tục ngữ là câu nói đúc kết kinh nghiệm, không có cốt truyện hay nhân vật như truyện kể dân gian.'
      },
      {
        id: 'van7-01-q3',
        type: 'true_false',
        prompt: 'Câu tục ngữ "Tấc đất tấc vàng" nhằm nhấn mạnh giá trị vô cùng quý giá của đất đai đối với sản xuất nông nghiệp.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. So sánh một tấc đất quý như một tấc vàng nhằm khuyên con người không được bỏ hoang đất đai.'
      },
      {
        id: 'van7-01-q4',
        type: 'fill_in',
        prompt: 'Điền từ còn thiếu vào câu tục ngữ: "Nhất nước, nhì phân, tam cần, tứ ________" (bốn yếu tố quan trọng trong nghề trồng lúa nước).',
        correctAnswer: 'giống',
        points: 2,
        explanation: '"Nhất nước, nhì phân, tam cần, tứ giống" là kinh nghiệm sản xuất nông nghiệp quý báu của cha ông.'
      },
      {
        id: 'van7-01-q5',
        type: 'essay',
        prompt: 'Viết đoạn văn ngắn (5-7 dòng) nêu suy nghĩ của em về lời khuyên trong câu tục ngữ: "Uống nước nhớ nguồn".',
        points: 2,
        explanation: 'Đoạn văn cần nêu được: "Nước" là thành quả, "Nguồn" là người tạo ra thành quả. Lời khuyên nhắc nhở đạo lý biết ơn tổ tiên, thầy cô, thương binh liệt sĩ và những người đã hy sinh vì nền độc lập tự do.'
      }
    ]
  },
  {
    id: 'asg-van7-02',
    title: 'Thực hành Tiếng Việt 7: Mở rộng thành phần câu bằng cụm từ',
    subjectId: 'van',
    grade: 7,
    chapter: 'Thực hành Tiếng Việt: Cụm từ và thành phần câu',
    description: 'Cách biến đổi từ đơn thành cụm danh từ, cụm động từ, cụm tính từ để câu văn giàu hình ảnh và thông tin chi tiết.',
    durationMinutes: 40,
    dueDate: '2026-11-30T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-van-02',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-28T10:00:00Z',
    questions: [
      {
        id: 'van7-02-q1',
        type: 'single_choice',
        prompt: 'Trong câu: "Những bông hoa hồng nhung trong vườn sớm nay đang đua nhau khoe sắc rực rỡ", thành phần chủ ngữ được mở rộng thành:',
        options: ['Một cụm danh từ', 'Một cụm động từ', 'Một cụm tính từ', 'Một từ đơn'],
        correctAnswer: 0,
        points: 2,
        explanation: '"Những bông hoa hồng nhung trong vườn sớm nay" có danh từ trung tâm là "bông hoa", được mở rộng bởi từ chỉ lượng "những" và định ngữ phụ sau.'
      },
      {
        id: 'van7-02-q2',
        type: 'multiple_choice',
        prompt: 'Mục đích của việc mở rộng thành phần câu bằng cụm từ là gì? (Chọn các phương án đúng)',
        options: [
          'Làm cho nội dung câu văn trở nên cụ thể, chi tiết hơn',
          'Giúp người đọc hình dung rõ nét hơn về đặc điểm, tính chất của sự vật, hành động',
          'Tăng tính gợi hình, gợi cảm cho diễn đạt',
          'Bắt buộc câu văn phải dài hơn 20 từ theo quy định ngữ pháp'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Mở rộng câu nhằm cung cấp thông tin sinh động và chính xác, không phải để đối phó số lượng từ.'
      },
      {
        id: 'van7-02-q3',
        type: 'true_false',
        prompt: 'Từ câu đơn "Mưa rơi", có thể mở rộng chủ ngữ và vị ngữ thành: "Cơn mưa rào mùa hạ bất chợt ào ạt trút xuống khắp nẻo đường làng."',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Câu đã mở rộng chủ ngữ (Cơn mưa rào mùa hạ) và vị ngữ (bất chợt ào ạt trút xuống khắp nẻo đường làng).'
      },
      {
        id: 'van7-02-q4',
        type: 'fill_in',
        prompt: 'Điền từ thích hợp vào chỗ trống: Mô hình cấu trúc của một cụm động từ gồm 3 phần: phần phụ trước, phần ________ và phần phụ sau.',
        correctAnswer: 'trung tâm',
        points: 2,
        explanation: 'Cụm động từ/cụm danh từ/cụm tính từ đều gồm: phần phụ trước - phần trung tâm - phần phụ sau.'
      },
      {
        id: 'van7-02-q5',
        type: 'essay',
        prompt: 'Cho câu gốc: "Chim hót." Hãy mở rộng cả hai thành phần chủ ngữ và vị ngữ để câu văn trở nên giàu chất thơ miêu tả buổi sáng mùa xuân.',
        points: 2,
        explanation: 'Ví dụ: "Những chú chim sơn ca nhỏ nhắn trên vòm lá non xanh mướt đang cất tiếng hót líu lo chào đón một ngày mới ngập tràn ánh nắng xuân."'
      }
    ]
  },

  // ==========================================
  // KHOA HỌC TỰ NHIÊN KHỐI 7
  // ==========================================
  {
    id: 'asg-khtn7-01',
    title: 'KHTN 7: Nguyên tử, Nguyên tố hóa học và Bảng tuần hoàn',
    subjectId: 'khtn',
    grade: 7,
    chapter: 'Chương 1: Nguyên tử - Nguyên tố hóa học',
    description: 'Cấu tạo hạt p, n, e trong nguyên tử, khối lượng nguyên tử, mô hình nguyên tử Rutherford - Bohr và bảng tuần hoàn.',
    durationMinutes: 45,
    dueDate: '2026-11-27T21:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-khtn-02',
    teacherName: 'Tổ KHTN',
    createdAt: '2026-10-26T16:00:00Z',
    questions: [
      {
        id: 'khtn7-01-q1',
        type: 'single_choice',
        prompt: 'Hạt nào sau đây mang điện tích âm và chuyển động xung quanh hạt nhân nguyên tử?',
        options: ['Hạt electron (e)', 'Hạt proton (p)', 'Hạt neutron (n)', 'Hạt nhân'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Electron mang điện tích âm (-), proton mang điện tích dương (+), neutron không mang điện.'
      },
      {
        id: 'khtn7-01-q2',
        type: 'multiple_choice',
        prompt: 'Trong một nguyên tử trung hòa về điện, những hạt nào có số lượng luôn luôn bằng nhau? (Chọn các phương án đúng)',
        options: ['Số proton', 'Số electron', 'Số neutron', 'Số hạt nhân'],
        correctAnswer: [0, 1],
        points: 2,
        explanation: 'Nguyên tử trung hòa về điện nên số hạt proton (điện tích +) luôn bằng số hạt electron (điện tích -).'
      },
      {
        id: 'khtn7-01-q3',
        type: 'true_false',
        prompt: 'Các nguyên tố hóa học trong bảng tuần hoàn được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo nguyên tắc sắp xếp các nguyên tố trong bảng tuần hoàn hiện đại.'
      },
      {
        id: 'khtn7-01-q4',
        type: 'fill_in',
        prompt: 'Kí hiệu hóa học của nguyên tố Oxi (Oxygen) là chữ cái in hoa gì?',
        correctAnswer: 'O',
        points: 2,
        explanation: 'Oxygen có kí hiệu hóa học là O.'
      },
      {
        id: 'khtn7-01-q5',
        type: 'essay',
        prompt: 'Một nguyên tử của nguyên tố X có tổng số hạt là 40, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 12. Hãy tìm số proton, neutron, electron và cho biết tên nguyên tố X.',
        points: 2,
        explanation: 'Ta có hệ: 2p + n = 40 và 2p - n = 12. Cộng hai vế: 4p = 52 => p = 13 (vậy e = 13). n = 40 - 26 = 14. Nguyên tố có p = 13 là Nhôm (Aluminium - Al).'
      }
    ]
  },
  {
    id: 'asg-khtn7-02',
    title: 'KHTN 7: Tốc độ chuyển động và Đồ thị Quãng đường - Thời gian',
    subjectId: 'khtn',
    grade: 7,
    chapter: 'Chương 2: Tốc độ',
    description: 'Khái niệm tốc độ, công thức v = s / t, đổi đơn vị m/s sang km/h và vẽ/đọc đồ thị quãng đường - thời gian.',
    durationMinutes: 40,
    dueDate: '2026-11-28T21:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-khtn-02',
    teacherName: 'Tổ KHTN',
    createdAt: '2026-10-27T16:30:00Z',
    questions: [
      {
        id: 'khtn7-02-q1',
        type: 'single_choice',
        prompt: 'Một người đi xe đạp đi được quãng đường 36 km trong thời gian 2 giờ. Tốc độ chuyển động của người đó là:',
        options: ['18 km/h', '72 km/h', '18 m/s', '34 km/h'],
        correctAnswer: 0,
        points: 2,
        explanation: 'v = s / t = 36 / 2 = 18 km/h.'
      },
      {
        id: 'khtn7-02-q2',
        type: 'multiple_choice',
        prompt: 'Những dụng cụ nào sau đây có thể dùng để đo tốc độ chuyển động trong thực tế hoặc trong phòng thí nghiệm? (Chọn các phương án đúng)',
        options: [
          'Đồng hồ bấm giây kết hợp thước đo độ dài',
          'Súng bắn tốc độ (dùng cảm biến radar/laser của cảnh sát giao thông)',
          'Cổng quang điện kết hợp đồng hồ đo thời gian hiện số',
          'Nhiệt kế thủy ngân'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Nhiệt kế dùng để đo nhiệt độ, không dùng để đo tốc độ.'
      },
      {
        id: 'khtn7-02-q3',
        type: 'true_false',
        prompt: 'Tốc độ 10 m/s tương đương với tốc độ 36 km/h.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. 10 m/s = 10 * 3.6 km/h = 36 km/h.'
      },
      {
        id: 'khtn7-02-q4',
        type: 'fill_in',
        prompt: 'Trên đồ thị quãng đường - thời gian (s - t), đoạn đồ thị nằm ngang song song với trục thời gian cho biết vật đang ở trạng thái __________ (không chuyển động).',
        correctAnswer: 'đứng yên',
        points: 2,
        explanation: 'Đoạn nằm ngang biểu thị thời gian t tăng nhưng quãng đường s không đổi, tức là vật đang đứng yên.'
      },
      {
        id: 'khtn7-02-q5',
        type: 'essay',
        prompt: 'Tại sao biển báo giới hạn tốc độ và biển báo giữ khoảng cách an toàn giữa các xe lại có vai trò tối quan trọng đối với an toàn giao thông đường bộ?',
        points: 2,
        explanation: 'Tốc độ càng cao thì quãng đường phanh hãm dừng xe càng dài và động năng va chạm càng lớn. Tuân thủ tốc độ và giữ khoảng cách an toàn giúp người lái xe kịp thời phản ứng trước các tình huống bất ngờ, giảm thiểu tai nạn nguy hiểm.'
      }
    ]
  },

  // ==========================================
  // LỊCH SỬ VÀ ĐỊA LÍ KHỐI 7
  // ==========================================
  {
    id: 'asg-lsdl7-01',
    title: 'Lịch sử 7: Các cuộc phát kiến địa lí lớn thế kỉ XV - XVI',
    subjectId: 'lich-su-dia-ly',
    grade: 7,
    chapter: 'Lịch sử - Chương 1: Tây Âu thời hậu kì trung đại',
    description: 'Hành trình vượt đại dương của Colombo, Magie-lan, nguyên nhân và tác động sâu rộng của các cuộc phát kiến.',
    durationMinutes: 45,
    dueDate: '2026-11-28T20:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-lsdl-02',
    teacherName: 'Tổ Sử - Địa',
    createdAt: '2026-10-26T09:00:00Z',
    questions: [
      {
        id: 'lsdl7-01-q1',
        type: 'single_choice',
        prompt: 'Nhà thám hiểm nào là người đầu tiên chỉ huy đoàn tàu thực hiện chuyến đi vòng quanh thế giới bằng đường biển (1519 - 1522)?',
        options: ['Phéc-năng Ma-gien-lan (Ferdinand Magellan)', 'Cri-xtốp Cô-lôm-bô (Christopher Columbus)', 'Vát-xcô đơ Ga-ma (Vasco da Gama)', 'B. Đi-a-xơ (Bartolomeu Dias)'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Đoàn thám hiểm của Magellan đã thực hiện chuyến hải hành lịch sử vòng quanh Trái Đất, chứng minh dứt khoát Trái Đất hình cầu.'
      },
      {
        id: 'lsdl7-01-q2',
        type: 'multiple_choice',
        prompt: 'Những hệ quả tích cực của các cuộc phát kiến địa lí thế kỉ XV - XVI là gì? (Chọn các phương án đúng)',
        options: [
          'Tìm ra những vùng đất mới, châu lục mới (châu Mỹ) và các tuyến đường biển quốc tế',
          'Mở rộng thị trường buôn bán và giao lưu văn hóa giữa các châu lục',
          'Đem lại những hiểu biết chính xác về hình dáng Trái Đất và các đại dương',
          'Hoàn toàn chấm dứt chiến tranh và xung đột trên toàn cầu'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Phát kiến địa lí mở ra thời kỳ giao thương nhưng cũng mở đường cho chủ nghĩa thực dân xâm lược, không hề chấm dứt chiến tranh.'
      },
      {
        id: 'lsdl7-01-q3',
        type: 'true_false',
        prompt: 'Năm 1492, C. Cô-lôm-bô dẫn đầu đoàn thám hiểm vượt Đại Tây Dương và phát hiện ra châu Mỹ.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Ngày 12/10/1492, đoàn tàu của Colombo đã cập bến quần đảo Bahamas ở vùng biển Caribe (châu Mỹ).'
      },
      {
        id: 'lsdl7-01-q4',
        type: 'fill_in',
        prompt: 'Hai quốc gia đi tiên phong khởi đầu cho các cuộc đại phát kiến địa lí ở châu Âu là Tây Ban Nha và Bồ ___________.',
        correctAnswer: 'Đào Nha',
        points: 2,
        explanation: 'Tây Ban Nha và Bồ Đào Nha có bờ biển dài giáp Đại Tây Dương và ngành hàng hải phát triển.'
      },
      {
        id: 'lsdl7-01-q5',
        type: 'essay',
        prompt: 'Hãy phân tích mặt trái (hậu quả tiêu cực) của các cuộc phát kiến địa lí đối với các dân tộc bản địa ở châu Á, châu Phi và châu Mỹ.',
        points: 2,
        explanation: 'Mặt trái: Bắt đầu thời kỳ xâm lược thực dân cướp bóc tài nguyên; nạn buôn bán nô lệ da đen tàn bạo; tiêu diệt các nền văn minh bản địa cổ xưa (Inca, Maya, Aztec) và lây truyền nhiều dịch bệnh.'
      }
    ]
  },
  {
    id: 'asg-lsdl7-02',
    title: 'Địa lí 7: Đặc điểm tự nhiên châu Âu và biến đổi khí hậu',
    subjectId: 'lich-su-dia-ly',
    grade: 7,
    chapter: 'Địa lí - Chương 1: Châu Âu',
    description: 'Vị trí địa lí, các dạng địa hình chính, các đới khí hậu và các biện pháp bảo vệ môi trường không khí ở châu Âu.',
    durationMinutes: 40,
    dueDate: '2026-11-29T20:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-lsdl-02',
    teacherName: 'Tổ Sử - Địa',
    createdAt: '2026-10-27T09:00:00Z',
    questions: [
      {
        id: 'lsdl7-02-q1',
        type: 'single_choice',
        prompt: 'Đại bộ phận diện tích lãnh thổ châu Âu nằm trong đới khí hậu nào?',
        options: ['Đới ôn hòa (ôn đới)', 'Đới nóng (nhiệt đới)', 'Đới lạnh (hàn đới)', 'Xích đạo'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Châu Âu nằm chủ yếu trong đới ôn hòa với hai kiểu khí hậu chính là ôn đới hải dương và ôn đới lục địa.'
      },
      {
        id: 'lsdl7-02-q2',
        type: 'multiple_choice',
        prompt: 'Những dãy núi nào sau đây là các dãy núi uốn nếp trẻ cao đồ sộ ở phía Nam châu Âu? (Chọn các phương án đúng)',
        options: ['Dãy An-pơ (Alps)', 'Dãy Cáp-ca (Caucasus)', 'Dãy Pi-rê-nê (Pyrenees)', 'Dãy U-ran (Ural)'],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Alps, Caucasus, Pyrenees là các dãy núi trẻ cao hiểm trở ở Nam Âu. Dãy Ural là ranh giới già phân chia Á - Âu ở phía Đông.'
      },
      {
        id: 'lsdl7-02-q3',
        type: 'true_false',
        prompt: 'Đồng bằng chiếm hơn 2/3 diện tích châu Âu, kéo dài từ Tây Âu sang Đông Âu.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Địa hình châu Âu tương đối bằng phẳng với đồng bằng chiếm phần lớn diện tích.'
      },
      {
        id: 'lsdl7-02-q4',
        type: 'fill_in',
        prompt: 'Dòng sông dài nhất ở châu Âu, bắt nguồn từ vùng đồi Valdai và đổ ra biển Caspi là sông ___________.',
        correctAnswer: 'Volga',
        points: 2,
        explanation: 'Sông Volga dài khoảng 3.530 km là dòng sông dài nhất châu Âu.'
      },
      {
        id: 'lsdl7-02-q5',
        type: 'essay',
        prompt: 'Các nước châu Âu đã thực hiện những giải pháp tiên tiến nào để giảm thiểu phát thải khí nhà kính và chuyển đổi sang năng lượng xanh?',
        points: 2,
        explanation: 'Các giải pháp: 1. Phát triển mạnh năng lượng tái tạo (điện gió ngoài khơi, điện mặt trời, điện sinh khối); 2. Áp dụng thuế carbon và thị trường mua bán tín chỉ phát thải (ETS); 3. Khuyến khích phương tiện giao thông chạy điện, tàu cao tốc và xe đạp; 4. Trồng và phục hồi rừng tự nhiên.'
      }
    ]
  },

  // ==========================================
  // TIN HỌC KHỐI 7
  // ==========================================
  {
    id: 'asg-tin7-01',
    title: 'Tin học 7: Thiết bị vào - ra và làm quen với phần mềm bảng tính',
    subjectId: 'tin-hoc',
    grade: 7,
    chapter: 'Chủ đề 1 & 4: Máy tính & Bảng tính điện tử',
    description: 'Chức năng của các thiết bị vào ra (Input/Output) và thao tác căn bản trên phần mềm bảng tính (Excel/Sheets).',
    durationMinutes: 45,
    dueDate: '2026-11-26T22:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-tin-01',
    teacherName: 'Tổ Tin học',
    createdAt: '2026-10-26T13:00:00Z',
    questions: [
      {
        id: 'tin7-01-q1',
        type: 'single_choice',
        prompt: 'Trong các thiết bị sau, thiết bị nào vừa là thiết bị vào vừa là thiết bị ra?',
        options: ['Màn hình cảm ứng (Touchscreen)', 'Bàn phím cơ', 'Chuột máy tính', 'Máy in laser'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Màn hình cảm ứng vừa hiển thị thông tin hình ảnh (ra) vừa tiếp nhận thao tác chạm ngón tay (vào).'
      },
      {
        id: 'tin7-01-q2',
        type: 'multiple_choice',
        prompt: 'Thành phần nào sau đây xuất hiện trên giao diện làm việc của bảng tính điện tử? (Chọn các phương án đúng)',
        options: [
          'Thanh công thức (Formula Bar)',
          'Hộp tên địa chỉ ô (Name Box)',
          'Tên các cột được đánh dấu bằng chữ cái (A, B, C...) và hàng bằng chữ số (1, 2, 3...)',
          'Bảng phối màu gradient CSS'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Thanh công thức, hộp tên, cột chữ cái và hàng số là các thành phần cốt lõi của bảng tính.'
      },
      {
        id: 'tin7-01-q3',
        type: 'true_false',
        prompt: 'Địa chỉ ô tính là giao điểm của một cột và một hàng, được viết theo thứ tự: Tên cột trước, Tên hàng sau (ví dụ: B5, C10).',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng quy tắc đặt tên ô tính tiêu chuẩn: [Tên cột][Tên hàng].'
      },
      {
        id: 'tin7-01-q4',
        type: 'fill_in',
        prompt: 'Để bắt đầu nhập một công thức tính toán trong phần mềm bảng tính, dấu đầu tiên bắt buộc phải gõ vào ô là dấu gì? (Gõ đúng kí tự)',
        correctAnswer: '=',
        points: 2,
        explanation: 'Mọi công thức trong bảng tính đều bắt đầu bằng dấu "=" (bằng).'
      },
      {
        id: 'tin7-01-q5',
        type: 'essay',
        prompt: 'Em hãy phân biệt sự khác nhau giữa dữ liệu kiểu số (Number) và dữ liệu kiểu văn bản/kí tự (Text) khi nhập vào ô tính trong Excel (về cách căn lề mặc định và khả năng tính toán).',
        points: 2,
        explanation: 'Dữ liệu kiểu số: Mặc định được căn thẳng lề phải của ô, có thể tham gia vào các phép tính toán số học. Dữ liệu kiểu văn bản (Text): Mặc định được căn thẳng lề trái của ô, không thể thực hiện các phép cộng trừ nhân chia trực tiếp.'
      }
    ]
  },
  {
    id: 'asg-tin7-02',
    title: 'Tin học 7: Sử dụng các hàm tính toán SUM, AVERAGE, MAX, MIN',
    subjectId: 'tin-hoc',
    grade: 7,
    chapter: 'Chủ đề 4: Ứng dụng tin học - Các hàm tính toán',
    description: 'Cú pháp hàm, địa chỉ tương đối và tuyệt đối, ứng dụng lập bảng điểm tổng kết học tập cho lớp học.',
    durationMinutes: 40,
    dueDate: '2026-11-29T22:30:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-tin-01',
    teacherName: 'Tổ Tin học',
    createdAt: '2026-10-28T13:00:00Z',
    questions: [
      {
        id: 'tin7-02-q1',
        type: 'single_choice',
        prompt: 'Để tính điểm trung bình cộng của ba ô C3, D3 và E3, công thức nào sau đây là chính xác?',
        options: ['=AVERAGE(C3:E3)', '=SUM(C3:E3)', '=MAX(C3:E3)', '=COUNT(C3:E3)'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Hàm AVERAGE tính trung bình cộng của một khối ô: =AVERAGE(C3:E3).'
      },
      {
        id: 'tin7-02-q2',
        type: 'multiple_choice',
        prompt: 'Các hàm số học nào sau đây nhận các đối số là danh sách ô hoặc khối ô? (Chọn các phương án đúng)',
        options: ['SUM', 'AVERAGE', 'MAX', 'MIN'],
        correctAnswer: [0, 1, 2, 3],
        points: 2,
        explanation: 'Cả 4 hàm SUM (tổng), AVERAGE (trung bình), MAX (lớn nhất), MIN (nhỏ nhất) đều có cú pháp nhận khối ô tính.'
      },
      {
        id: 'tin7-02-q3',
        type: 'true_false',
        prompt: 'Khi sao chép công thức =C4+D4 từ ô E4 xuống ô E5, công thức sẽ tự động điều chỉnh thành =C5+D5.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng do tính chất của địa chỉ tương đối trong bảng tính.'
      },
      {
        id: 'tin7-02-q4',
        type: 'fill_in',
        prompt: 'Tên hàm tiếng Anh dùng để tìm giá trị lớn nhất trong một dải dữ liệu số là ___________.',
        correctAnswer: 'MAX',
        points: 2,
        explanation: 'Hàm MAX trả về giá trị lớn nhất trong tập số liệu.'
      },
      {
        id: 'tin7-02-q5',
        type: 'practice',
        prompt: 'Giả sử cột B chứa điểm Toán của 10 học sinh từ ô B2 đến B11. Hãy viết chính xác 3 công thức: 1. Tính tổng điểm cả lớp; 2. Tính điểm trung bình môn Toán; 3. Tìm điểm thi cao nhất.',
        points: 2,
        explanation: '1. =SUM(B2:B11); 2. =AVERAGE(B2:B11); 3. =MAX(B2:B11).'
      }
    ]
  },

  // ==========================================
  // GIÁO DỤC CÔNG DÂN KHỐI 7
  // ==========================================
  {
    id: 'asg-gdcd7-01',
    title: 'GDCD 7: Tự hào về truyền thống quê hương và Di sản văn hóa',
    subjectId: 'gdcd',
    grade: 7,
    chapter: 'Chủ đề 1 & 2: Di sản văn hóa & Quê hương',
    description: 'Phân loại di sản văn hóa vật thể và phi vật thể; trách nhiệm giữ gìn và quảng bá bản sắc dân tộc.',
    durationMinutes: 40,
    dueDate: '2026-11-28T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdcd-02',
    teacherName: 'Tổ GDCD',
    createdAt: '2026-10-27T10:30:00Z',
    questions: [
      {
        id: 'gdcd7-01-q1',
        type: 'single_choice',
        prompt: 'Di sản nào dưới đây là Di sản văn hóa phi vật thể của Việt Nam được UNESCO ghi danh?',
        options: [
          'Dân ca Quan họ Bắc Ninh',
          'Cố đô Huế',
          'Phố cổ Hội An',
          'Thánh địa Mỹ Sơn'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Dân ca Quan họ Bắc Ninh là sản phẩm tinh thần gắn với nghệ thuật diễn xướng dân gian (di sản phi vật thể).'
      },
      {
        id: 'gdcd7-01-q2',
        type: 'multiple_choice',
        prompt: 'Những hành vi nào dưới đây là vi phạm pháp luật về bảo vệ di sản văn hóa? (Chọn các phương án đúng)',
        options: [
          'Khắc tên, vẽ bậy lên tường bia đá và di tích lịch sử',
          'Đào bới cổ vật trái phép tại khu khảo cổ',
          'Bảo tồn, trùng tu di tích theo đúng quy định khoa học',
          'Chiếm đoạt, làm sai lệch hiện vật lịch sử'
        ],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Bảo tồn trùng tu đúng quy chuẩn là hành động đúng đắn được khuyến khích.'
      },
      {
        id: 'gdcd7-01-q3',
        type: 'true_false',
        prompt: 'Di sản văn hóa vật thể là sản phẩm vật chất có giá trị lịch sử, văn hóa, khoa học, bao gồm di tích lịch sử - văn hóa, danh lam thắng cảnh, di vật, cổ vật, bảo vật quốc gia.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo quy định của Luật Di sản văn hóa Việt Nam.'
      },
      {
        id: 'gdcd7-01-q4',
        type: 'fill_in',
        prompt: 'Điền từ còn thiếu vào chỗ trống: Không gian văn hóa Cồng chiêng ___________ là di sản văn hóa phi vật thể đại diện của nhân loại.',
        correctAnswer: 'Tây Nguyên',
        points: 2,
        explanation: 'Không gian văn hóa Cồng chiêng Tây Nguyên được UNESCO vinh danh năm 2005.'
      },
      {
        id: 'gdcd7-01-q5',
        type: 'essay',
        prompt: 'Là một học sinh THCS, em có thể làm những việc gì cụ thể để góp phần giữ gìn và giới thiệu di tích lịch sử hoặc danh lam thắng cảnh tại địa phương mình tới bạn bè quốc tế?',
        points: 2,
        explanation: 'Các việc làm: 1. Tham gia dọn dẹp vệ sinh, chăm sóc di tích địa phương; 2. Có ý thức giữ gìn, không xả rác hay viết vẽ bậy khi tham quan; 3. Tìm hiểu kiến thức lịch sử để giới thiệu bằng tiếng Việt hoặc tiếng Anh trên mạng xã hội; 4. Nhắc nhở mọi người cùng thực hiện văn minh nơi di tích.'
      }
    ]
  },
  {
    id: 'asg-gdcd7-02',
    title: 'GDCD 7: Quản lý tiền hiệu quả và Kỹ năng chi tiêu thông minh',
    subjectId: 'gdcd',
    grade: 7,
    chapter: 'Chủ đề 3: Kỹ năng quản lý tài chính cá nhân',
    description: 'Biết cách lập kế hoạch chi tiêu hợp lý, phân biệt giữa "nhu cầu thiết yếu" và "mong muốn cá nhân".',
    durationMinutes: 40,
    dueDate: '2026-11-30T21:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdcd-02',
    teacherName: 'Tổ GDCD',
    createdAt: '2026-10-29T10:30:00Z',
    questions: [
      {
        id: 'gdcd7-02-q1',
        type: 'single_choice',
        prompt: 'Khoản chi nào dưới đây thuộc nhóm "nhu cầu thiết yếu" hàng ngày của một học sinh?',
        options: [
          'Tiền mua sách vở và bút viết phục vụ học tập',
          'Tiền nạp thẻ chơi game online',
          'Tiền mua đồ chơi theo trào lưu trên mạng',
          'Tiền đi trà sữa cùng bạn bè mỗi ngày'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Sách vở học tập là nhu cầu thiết yếu bắt buộc cho việc học.'
      },
      {
        id: 'gdcd7-02-q2',
        type: 'multiple_choice',
        prompt: 'Ý nghĩa của việc biết quản lý tiền và tiết kiệm từ khi còn nhỏ là gì? (Chọn các phương án đúng)',
        options: [
          'Chủ động tài chính khi gặp những tình huống khó khăn bất ngờ',
          'Rèn luyện đức tính tự lập, trách nhiệm và kiên trì',
          'Giúp đỡ được cha mẹ và chia sẻ với những người có hoàn cảnh khó khăn',
          'Tích lũy tiền bạc để khoe khoang với bạn bè'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Tiết kiệm giúp con người tự chủ và giàu lòng nhân ái, không phải để khoe khoang.'
      },
      {
        id: 'gdcd7-02-q3',
        type: 'true_false',
        prompt: 'Nguyên tắc quản lý tài chính "chi tiêu trước, còn thừa bao nhiêu mới đem tiết kiệm" là nguyên tắc quản lý tiền thông minh nhất.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai. Nguyên tắc thông minh là "trích một phần tiết kiệm ngay khi có thu nhập/tiền mừng tuổi, sau đó mới chi tiêu phần còn lại".'
      },
      {
        id: 'gdcd7-02-q4',
        type: 'fill_in',
        prompt: 'Điền từ còn thiếu vào câu tục ngữ: "Khéo ăn thì no, khéo ________ thì ấm".',
        correctAnswer: 'co',
        points: 2,
        explanation: '"Khéo ăn thì no, khéo co thì ấm" khuyên răn con người biết liệu cơm gắp mắm, chi tiêu phù hợp với khả năng.'
      },
      {
        id: 'gdcd7-02-q5',
        type: 'essay',
        prompt: 'Giả sử em được ông bà lì xì 500.000 đồng dịp Tết. Em hãy lập kế hoạch phân bổ số tiền này vào 3 mục: 1. Nhu cầu học tập; 2. Tiết kiệm dài hạn; 3. Chia sẻ giúp đỡ người khó khăn. Giải thích lý do.',
        points: 2,
        explanation: 'Ví dụ phân bổ: 200.000 đồng mua dụng cụ học tập và sách tham khảo (40%); 250.000 đồng bỏ ống heo tiết kiệm (50%); 50.000 đồng nuôi heo đất tình thương ủng hộ bạn nghèo vượt khó (10%). Kế hoạch cân đối giữa học tập, tương lai và lòng nhân ái.'
      }
    ]
  },

  // ==========================================
  // CÔNG NGHỆ KHỐI 7
  // ==========================================
  {
    id: 'asg-cn7-01',
    title: 'Công nghệ 7: Kỹ thuật trồng trọt và Bảo vệ cây trồng',
    subjectId: 'cong-nghe',
    grade: 7,
    chapter: 'Chương 1: Trồng trọt',
    description: 'Quy trình làm đất, bón phân hợp lý, chăm sóc và phương pháp phòng trừ sâu bệnh bằng biện pháp sinh học an toàn.',
    durationMinutes: 40,
    dueDate: '2026-11-28T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-cn-02',
    teacherName: 'Tổ Công nghệ',
    createdAt: '2026-10-27T11:30:00Z',
    questions: [
      {
        id: 'cn7-01-q1',
        type: 'single_choice',
        prompt: 'Biện pháp nào sau đây là biện pháp phòng trừ sâu bệnh sinh học thân thiện với môi trường?',
        options: [
          'Sử dụng thiên địch (ong mắt đỏ, bọ rùa) và chế phẩm thảo mộc',
          'Phun thuốc trừ sâu hóa học nồng độ cực cao liên tục',
          'Đốt toàn bộ đồng ruộng sau khi có dịch hại',
          'Rải hóa chất diệt cỏ bừa bãi xuống nguồn nước'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Sử dụng thiên địch và thuốc sinh học là biện pháp sinh học bảo vệ môi trường và sức khỏe con người.'
      },
      {
        id: 'cn7-01-q2',
        type: 'multiple_choice',
        prompt: 'Các công việc chính trong quy trình chuẩn bị đất trồng cây bao gồm những khâu nào? (Chọn các phương án đúng)',
        options: ['Cày bừa đất', 'Đập nhỏ đất và làm sạch cỏ dại', 'Lên luống (liếp) tạo rãnh thoát nước', 'Phun thuốc diệt côn trùng có ích'],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Cày bừa, đập đất, dọn cỏ và lên luống giúp đất tơi xốp, giàu oxy và thoát úng tốt.'
      },
      {
        id: 'cn7-01-q3',
        type: 'true_false',
        prompt: 'Bón lót là việc bón phân vào đất trước khi gieo trồng nhằm cung cấp chất dinh dưỡng cho cây con ngay khi mới bén rễ.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng khái niệm về bón lót (thường dùng phân hữu cơ, phân chuồng hoai mục).'
      },
      {
        id: 'cn7-01-q4',
        type: 'fill_in',
        prompt: 'Loại phân bón có nguồn gốc từ xác thực vật, phân động vật đã qua ủ vi sinh hoai mục gọi là phân ___________.',
        correctAnswer: 'hữu cơ',
        points: 2,
        explanation: 'Phân hữu cơ giúp cải tạo đất màu mỡ lâu bền.'
      },
      {
        id: 'cn7-01-q5',
        type: 'essay',
        prompt: 'Nêu nguyên tắc "4 đúng" khi sử dụng thuốc bảo vệ thực vật trong trồng trọt và tác hại nếu lạm dụng thuốc hóa học.',
        points: 2,
        explanation: 'Nguyên tắc 4 đúng: Đúng thuốc, đúng liều lượng nồng độ, đúng lúc, đúng cách. Tác hại lạm dụng thuốc hóa học: Gây ô nhiễm nguồn nước và đất; tiêu diệt sinh vật có ích; làm sâu hại kháng thuốc; để lại dư lượng độc hại trên nông sản gây bệnh cho người tiêu dùng.'
      }
    ]
  },
  {
    id: 'asg-cn7-02',
    title: 'Công nghệ 7: Kỹ thuật chăn nuôi và chăm sóc vật nuôi',
    subjectId: 'cong-nghe',
    grade: 7,
    chapter: 'Chương 2: Chăn nuôi',
    description: 'Vai trò của chăn nuôi, các nhóm thức ăn dinh dưỡng, chuồng trại đạt chuẩn và tiêm phòng vắc-xin cho đàn vật nuôi.',
    durationMinutes: 40,
    dueDate: '2026-11-30T22:00:00Z',
    maxPoints: 10,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-cn-02',
    teacherName: 'Tổ Công nghệ',
    createdAt: '2026-10-29T11:30:00Z',
    questions: [
      {
        id: 'cn7-02-q1',
        type: 'single_choice',
        prompt: 'Hướng chuồng nuôi gia súc, gia cầm ở nước ta nên xây dựng theo hướng nào để đón gió mát mùa hè và tránh gió mùa đông bắc?',
        options: ['Hướng Nam hoặc Đông Nam', 'Hướng chính Bắc', 'Hướng Tây Bắc', 'Hướng chính Tây'],
        correctAnswer: 0,
        points: 2,
        explanation: 'Hướng Nam và Đông Nam đón gió mát lành mùa hè, mùa đông ấm áp, tránh được gió rét buốt từ phương Bắc.'
      },
      {
        id: 'cn7-02-q2',
        type: 'multiple_choice',
        prompt: 'Những biện pháp nào sau đây giúp phòng ngừa dịch bệnh hiệu quả trong chăn nuôi? (Chọn các phương án đúng)',
        options: [
          'Vệ sinh, tiêu độc khử trùng chuồng trại định kỳ',
          'Tiêm phòng đầy đủ các loại vắc-xin phòng bệnh theo lịch khuyến cáo',
          'Cung cấp thức ăn và nước uống sạch sẽ, hợp vệ sinh',
          'Vứt xác động vật ốm chết ra sông hồ công cộng'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Vứt xác động vật chết ra sông suối làm lây lan dịch bệnh nghiêm trọng và hủy hoại môi trường.'
      },
      {
        id: 'cn7-02-q3',
        type: 'true_false',
        prompt: 'Thức ăn tinh cho vật nuôi bao gồm các loại hạt ngũ cốc (ngô, thóc, tấm, đậu tương) có hàm lượng chất bột đường và protein cao.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo phân loại nhóm thức ăn chăn nuôi.'
      },
      {
        id: 'cn7-02-q4',
        type: 'fill_in',
        prompt: 'Biện pháp tạo miễn dịch chủ động cho vật nuôi chống lại các bệnh truyền nhiễm nguy hiểm bằng cách tiêm ___________ định kỳ.',
        correctAnswer: 'vắc xin',
        points: 2,
        explanation: 'Tiêm vắc-xin kích thích hệ miễn dịch của vật nuôi sinh kháng thể chống bệnh.'
      },
      {
        id: 'cn7-02-q5',
        type: 'essay',
        prompt: 'Trình bày vai trò của ngành chăn nuôi đối với nền kinh tế và đời sống con người (cung cấp thực phẩm, nguyên liệu công nghiệp, sức kéo, phân bón).',
        points: 2,
        explanation: 'Vai trò: 1. Cung cấp thực phẩm giàu đạm (thịt, trứng, sữa) nâng cao sức khỏe cộng đồng; 2. Cung cấp nguyên liệu cho công nghiệp chế biến và dệt may (da, lông, sừng); 3. Cung cấp phân bón hữu cơ chất lượng cao cho ngành trồng trọt; 4. Tạo công ăn việc làm và tăng thu nhập cho nông dân.'
      }
    ]
  },
  // ==========================================
  // ÂM NHẠC KHỐI 7 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-nhac7-01',
    title: 'Bài tập Âm nhạc 7: Nhịp 4/4 và Kĩ thuật xướng âm cơ bản',
    subjectId: 'am-nhac',
    grade: 7,
    description: 'Nắm vững quy tắc số chỉ nhịp 4/4 (nhịp C), thứ tự phách mạnh nhẹ, dấu hóa bất thường và kĩ thuật giữ nhịp bằng tay.',
    durationMinutes: 15,
    dueDate: '2026-12-16T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-nhac-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-25T08:30:00Z',
    questions: [
      {
        id: 'nhac7-01-q1',
        type: 'single_choice',
        prompt: 'Trong số chỉ nhịp 4/4, tính chất độ mạnh yếu của 4 phách trong một ô nhịp diễn ra theo thứ tự nào?',
        options: [
          'Phách 1 mạnh, phách 2 nhẹ, phách 3 mạnh vừa, phách 4 nhẹ',
          'Phách 1 nhẹ, phách 2 mạnh, phách 3 nhẹ, phách 4 rất mạnh',
          'Tất cả 4 phách đều mạnh như nhau',
          'Phách 1 và phách 4 mạnh, phách 2 và phách 3 nhẹ'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Quy luật nhịp 4/4: Phách 1 mạnh, phách 2 nhẹ, phách 3 mạnh vừa, phách 4 nhẹ.'
      },
      {
        id: 'nhac7-01-q2',
        type: 'multiple_choice',
        prompt: 'Kí hiệu nhịp 4/4 còn có thể được viết bằng chữ cái nào sau đây trên khuông nhạc? (Chọn phương án đúng)',
        options: [
          'Chữ C hoa',
          'Kí hiệu 4 ô vuông lồng nhau',
          'Số 4 bên cạnh nốt tròn'
        ],
        correctAnswer: [0],
        points: 2,
        explanation: 'Nhịp 4/4 thường được viết tắt bằng chữ C (Common time).'
      },
      {
        id: 'nhac7-01-q3',
        type: 'true_false',
        prompt: 'Dấu thăng (#) đặt trước một nốt nhạc có tác dụng nâng cao độ của nốt đó lên đúng 1 cung nguyên.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai. Dấu thăng nâng cao độ của nốt lên nửa cung (1/2 cung), dấu thăng kép mới nâng 1 cung.'
      },
      {
        id: 'nhac7-01-q4',
        type: 'fill_in',
        prompt: 'Dấu chấm dôi đặt bên phải một hình nốt có tác dụng làm tăng thêm một ________ trường độ của chính nốt đó.',
        correctAnswer: 'nửa',
        points: 2,
        explanation: 'Dấu chấm dôi tăng thêm 1/2 giá trị trường độ ban đầu.'
      },
      {
        id: 'nhac7-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu xuất xứ và ý nghĩa ca từ bài hát "Ca-chiu-sa" (Dân ca Nga) được học trong chương trình Âm nhạc lớp 7.',
        points: 2,
        explanation: 'Học sinh trình bày: Bài hát Nga nổi tiếng thời chiến tranh vệ quốc, ca ngợi tình yêu thủy chung của người con gái hậu phương gửi tới người chiến sĩ đang cầm súng bảo vệ biên cương.'
      }
    ]
  },
  {
    id: 'asg-nhac7-02',
    title: 'Bài tập Âm nhạc 7: Nhạc cụ phương Tây & Nhạc sĩ Văn Cao',
    subjectId: 'am-nhac',
    grade: 7,
    description: 'Khám phá các nhạc cụ cổ điển phương Tây (Piano, Guitar, Violin) và thân thế sự nghiệp của nhạc sĩ Văn Cao.',
    durationMinutes: 15,
    dueDate: '2026-12-21T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-nhac-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-26T08:30:00Z',
    questions: [
      {
        id: 'nhac7-02-q1',
        type: 'single_choice',
        prompt: 'Ai là tác giả của ca khúc "Tiến quân ca" - Quốc ca chính thức của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam?',
        options: [
          'Nhạc sĩ Văn Cao',
          'Nhạc sĩ Lưu Hữu Phước',
          'Nhạc sĩ Hoàng Việt',
          'Nhạc sĩ Trịnh Công Sơn'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Nhạc sĩ Văn Cao sáng tác "Tiến quân ca" vào năm 1944 tại Hà Nội.'
      },
      {
        id: 'nhac7-02-q2',
        type: 'multiple_choice',
        prompt: 'Những nhạc cụ nào sau đây thuộc bộ dây phương Tây sử dụng cung vĩ (cần kéo) để phát ra âm thanh? (Chọn các phương án đúng)',
        options: [
          'Đàn Violin (Vĩ cầm)',
          'Đàn Cello (Trung cầm)',
          'Đàn Contrabass (Đại vĩ cầm)',
          'Đàn Guitar thùng phím lõm'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Violin, Cello, Contrabass thuộc bộ dây dùng cung kéo (bowed string instruments).'
      },
      {
        id: 'nhac7-02-q3',
        type: 'true_false',
        prompt: 'Đàn Piano (Dương cầm) được mệnh danh là vua của các loại nhạc cụ nhờ dải âm vực rộng và khả năng diễn tả âm lượng phong phú.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Piano được tôn vinh là ông hoàng nhạc cụ trong nền âm nhạc thế giới.'
      },
      {
        id: 'nhac7-02-q4',
        type: 'fill_in',
        prompt: 'Ca khúc "Làng tôi" với nhịp điệu êm đềm tha thiết tả cảnh làng quê Bắc Bộ kháng chiến cũng do nhạc sĩ ________ sáng tác.',
        correctAnswer: 'văn cao',
        points: 2,
        explanation: 'Làng tôi là tuyệt phẩm của nhạc sĩ Văn Cao.'
      },
      {
        id: 'nhac7-02-q5',
        type: 'essay',
        prompt: 'Khi đứng chào cờ và hát Quốc ca, người học sinh cần có thái độ, tư thế và ý thức như thế nào để thể hiện lòng yêu nước?',
        points: 2,
        explanation: 'Học sinh nêu: Đứng nghiêm trang, mắt hướng về quốc kỳ, hát to rõ ràng hào sảng, thể hiện lòng biết ơn các anh hùng liệt sĩ và lòng tự hào dân tộc.'
      }
    ]
  },
  // ==========================================
  // MĨ THUẬT KHỐI 7 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-mt7-01',
    title: 'Bài tập Mĩ thuật 7: Nghệ thuật chữ & Thiết kế Logo biểu trưng',
    subjectId: 'mi-thuat',
    grade: 7,
    description: 'Tìm hiểu kiểu chữ trang trí, nghệ thuật Typography và các bước phác thảo logo biểu trưng trường học, tổ chức.',
    durationMinutes: 15,
    dueDate: '2026-12-19T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-mt-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-27T08:30:00Z',
    questions: [
      {
        id: 'mt7-01-q1',
        type: 'single_choice',
        prompt: 'Một logo (biểu trưng) thành công và đạt chuẩn thẩm mĩ cần đáp ứng tiêu chí cốt lõi nào sau đây?',
        options: [
          'Hình tượng cô đọng súc tích, dễ nhận biết, mang ý nghĩa đặc trưng và dễ ứng dụng in ấn',
          'Vẽ càng nhiều chi tiết rườm rà và chữ viết càng dài càng tốt',
          'Bắt buộc phải phối trộn ít nhất từ 15 đến 20 màu sắc rực rỡ',
          'Chỉ được dùng ảnh chụp nguyên bản không được cách điệu'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Logo phải cô đọng, dễ nhớ, dễ tái hiện ở các kích cỡ khác nhau.'
      },
      {
        id: 'mt7-01-q2',
        type: 'multiple_choice',
        prompt: 'Các kiểu chữ cơ bản trong mĩ thuật đồ họa ứng dụng gồm có: (Chọn các phương án đúng)',
        options: [
          'Chữ nét đều (độ dày các nét bằng nhau)',
          'Chữ nét thanh nét đậm (có sự biến thiên độ dày mỏng)',
          'Chữ trang trí cách điệu nghệ thuật',
          'Chữ mã vạch barcode không đọc được'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Chữ nét đều, nét thanh đậm và chữ cách điệu là ba hệ thống chữ trang trí căn bản.'
      },
      {
        id: 'mt7-01-q3',
        type: 'true_false',
        prompt: 'Nghệ thuật Typography là nghệ thuật sắp đặt và tạo hình con chữ nhằm truyền tải thông điệp thị giác hấp dẫn người xem.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo khái niệm mĩ thuật đồ họa hiện đại.'
      },
      {
        id: 'mt7-01-q4',
        type: 'fill_in',
        prompt: 'Hình biểu tượng cô đọng dùng để nhận diện một trường học, thương hiệu hoặc tổ chức được gọi là biểu ________ (hoặc Logo).',
        correctAnswer: 'trưng',
        points: 2,
        explanation: 'Biểu trưng (Logo).'
      },
      {
        id: 'mt7-01-q5',
        type: 'practice',
        prompt: 'Em hãy nêu ý tưởng thiết kế một logo biểu trưng cho Câu lạc bộ Sách trường THCS Mỹ Hòa: Nêu rõ hình tượng trung tâm, màu sắc chủ đạo và khẩu hiệu gắn kèm.',
        points: 2,
        explanation: 'Học sinh nêu: Hình tượng (quyển sách mở ra cánh chim bồ câu hoặc ngọn đuốc tri thức); Màu sắc (xanh dương hy vọng và vàng ấm áp); Thông điệp (Tri thức mở lối tương lai).'
      }
    ]
  },
  {
    id: 'asg-mt7-02',
    title: 'Bài tập Mĩ thuật 7: Điêu khắc tượng tròn & Phù điêu đất sét',
    subjectId: 'mi-thuat',
    grade: 7,
    description: 'Phân biệt nghệ thuật tượng tròn ba chiều với nghệ thuật phù điêu chạm nổi và kĩ thuật tạo khối với đất nặn.',
    durationMinutes: 15,
    dueDate: '2026-12-23T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-mt-01',
    teacherName: 'Tổ Nghệ thuật',
    createdAt: '2026-10-28T08:30:00Z',
    questions: [
      {
        id: 'mt7-02-q1',
        type: 'single_choice',
        prompt: 'Điểm khác biệt căn bản nhất giữa "tượng tròn" và "phù điêu" trong nghệ thuật điêu khắc là gì?',
        options: [
          'Tượng tròn có thể quan sát trọn vẹn từ mọi góc độ xung quanh (360 độ), còn phù điêu được gắn nổi hoặc khoét chìm trên một mặt phẳng nền',
          'Tượng tròn chỉ làm bằng gỗ còn phù điêu chỉ làm bằng giấy bồi',
          'Phù điêu có kích thước lớn hơn tượng tròn gấp mười lần',
          'Tượng tròn không có khối ba chiều'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Tượng tròn là khối tự do trong không gian (3D quan sát đa chiều), phù điêu là hình khối gắn liền với mặt nền.'
      },
      {
        id: 'mt7-02-q2',
        type: 'multiple_choice',
        prompt: 'Những chất liệu truyền thống nào thường được nghệ nhân Việt Nam sử dụng trong nghệ thuật điêu khắc tạc tượng? (Chọn các phương án đúng)',
        options: [
          'Gỗ (gỗ mít, gỗ hương)',
          'Đá tự nhiên (đá hoa cương, đá cẩm thạch Ngũ Hành Sơn)',
          'Đồng đúc',
          'Khí heli'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Gỗ, đá và đồng là các chất liệu điêu khắc truyền thống lâu đời.'
      },
      {
        id: 'mt7-02-q3',
        type: 'true_false',
        prompt: 'Kĩ thuật đắp nổi đất sét đòi hỏi người tạo hình phải tạo trước một mặt phẳng nền rồi mới đắp từng mảng khối lên trên.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng. Quy trình tạo phù điêu đất nặn bắt đầu bằng tạo nền phẳng, phác hình rồi đắp nổi/khắc chìm.'
      },
      {
        id: 'mt7-02-q4',
        type: 'fill_in',
        prompt: 'Tác phẩm điêu khắc gắn liền trên bề mặt tường hoặc phiến đá được gọi bằng thuật ngữ tiếng Việt là tranh phù ________.',
        correctAnswer: 'điêu',
        points: 2,
        explanation: 'Phù điêu (relief).'
      },
      {
        id: 'mt7-02-q5',
        type: 'essay',
        prompt: 'Em hãy viết 4-6 dòng giới thiệu về pho tượng Phật Bà Quan Âm nghìn mắt nghìn tay tại chùa Bút Tháp (Bắc Ninh) - kiệt tác đỉnh cao của điêu khắc gỗ cổ Việt Nam.',
        points: 2,
        explanation: 'Học sinh trình bày: Tác phẩm do nghệ nhân Trương Thọ Nam tạc vào thế kỉ 17, bằng gỗ mít phủ sơn son thếp vàng, bố cục hài hòa với nghìn cánh tay tỏa rộng như vầng hào quang từ bi cứu khổ cứu nạn.'
      }
    ]
  },
  // ==========================================
  // GIÁO DỤC THỂ CHẤT KHỐI 7 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-gdtc7-01',
    title: 'Bài tập Giáo dục thể chất 7: Kĩ thuật chạy cự li trung bình & Phối hợp nhịp thở',
    subjectId: 'giao-duc-the-chat',
    grade: 7,
    description: 'Kĩ thuật phân phối sức bền trên đường chạy, nhịp thở 2 bước hít vào - 2 bước thở ra và cách khắc phục hiện tượng "cực điểm".',
    durationMinutes: 15,
    dueDate: '2026-12-16T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdtc-01',
    teacherName: 'GDTC',
    createdAt: '2026-10-25T10:15:00Z',
    questions: [
      {
        id: 'gdtc7-01-q1',
        type: 'single_choice',
        prompt: 'Khi chạy cự li trung bình (500m nữ, 800m nam), kĩ thuật phối hợp nhịp thở với bước chạy tối ưu nhất là:',
        options: [
          'Hai bước hít vào bằng mũi sâu, hai bước thở mạnh ra bằng miệng đều đặn',
          'Nín thở suốt nửa quãng đường chạy đầu tiên',
          'Chỉ thở bằng miệng gấp gáp không theo nhịp bước',
          'Mỗi bước chạy hít vào một lần'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Nhịp thở 2 bước hít sâu - 2 bước thở ra nhịp nhàng giúp cung cấp đủ oxy và duy trì sức bền.'
      },
      {
        id: 'gdtc7-01-q2',
        type: 'multiple_choice',
        prompt: 'Hiện tượng "cực điểm" trong chạy cự li trung bình thường biểu hiện qua những dấu hiệu nào? (Chọn các phương án đúng)',
        options: [
          'Cảm giác tức ngực, khó thở, chân tay nặng nề',
          'Tốc độ chạy bị giảm sút và muốn bỏ cuộc',
          'Cảm thấy toàn thân nhẹ bẫng bay lên không trung',
          'Nhịp tim tăng nhanh'
        ],
        correctAnswer: [0, 1, 3],
        points: 2,
        explanation: 'Hiện tượng cực điểm gây tức ngực, khó thở, nhịp tim cao; người chạy cần kiên trì vượt qua để bước vào giai đoạn hô hấp thuận lợi.'
      },
      {
        id: 'gdtc7-01-q3',
        type: 'true_false',
        prompt: 'Để vượt qua hiện tượng "cực điểm", người chạy cần chủ động giảm nhẹ tốc độ, tăng độ sâu nhịp thở và kiên trì tiếp tục duy trì bước chạy.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo phương pháp khắc phục cực điểm trong sinh lí học thể dục thể thao.'
      },
      {
        id: 'gdtc7-01-q4',
        type: 'fill_in',
        prompt: 'Khác với chạy cự li ngắn xuất phát bằng bàn đạp, chạy cự li trung bình sử dụng tư thế xuất phát ________ (đứng chân trước chân sau).',
        correctAnswer: 'cao',
        points: 2,
        explanation: 'Xuất phát cao.'
      },
      {
        id: 'gdtc7-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu kế hoạch tự rèn luyện sức bền chạy bộ mỗi tuần tại nhà (tần suất, thời gian, cự li) để nâng cao thể lực.',
        points: 2,
        explanation: 'Học sinh nêu kế hoạch hợp lí: Chạy 3-4 buổi/tuần, mỗi buổi 15-20 phút, khởi động kĩ trước khi chạy và thả lỏng sau khi chạy, ăn uống đủ chất và ngủ đủ giấc.'
      }
    ]
  },
  {
    id: 'asg-gdtc7-02',
    title: 'Bài tập Giáo dục thể chất 7: Kĩ thuật chuyền bóng thấp tay môn Bóng chuyền',
    subjectId: 'giao-duc-the-chat',
    grade: 7,
    description: 'Tư thế chuẩn bị, vị trí tiếp xúc bóng trên cẳng tay và góc tạo bởi hai cánh tay khi thực hiện động tác đệm bóng.',
    durationMinutes: 15,
    dueDate: '2026-12-21T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gdtc-01',
    teacherName: 'GDTC',
    createdAt: '2026-10-26T10:15:00Z',
    questions: [
      {
        id: 'gdtc7-02-q1',
        type: 'single_choice',
        prompt: 'Trong kĩ thuật chuyền bóng thấp tay (đệm bóng) môn bóng chuyền, điểm tiếp xúc bóng chính xác nhất trên cánh tay là:',
        options: [
          'Một phần ba cẳng tay phía trên cổ tay (khoảng 10-15cm cách cổ tay)',
          'Ngay tại các đầu ngón tay',
          'Vùng bắp tay sát nách',
          'Mặt ngoài của khuỷu tay'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Vị trí tiếp xúc bóng chuẩn là 1/3 dưới cẳng tay (phía trên cổ tay một khoảng).'
      },
      {
        id: 'gdtc7-02-q2',
        type: 'multiple_choice',
        prompt: 'Khi thực hiện kĩ thuật đệm bóng, hai bàn tay được lồng vào nhau theo cách nào sau đây? (Chọn các phương án đúng)',
        options: [
          'Các ngón của bàn tay này đặt lồng lên các ngón của bàn tay kia rồi gập lại',
          'Hai ngón tay cái áp sát song song và hướng về phía trước',
          'Hai cẳng tay khép sát tạo thành một mặt phẳng đón bóng',
          'Hai bàn tay buông rời hoàn toàn đập bóng bằng lòng bàn tay'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Hai bàn tay lồng vào nhau, ngón cái song song, cẳng tay khép tạo mặt phẳng đệm bóng.'
      },
      {
        id: 'gdtc7-02-q3',
        type: 'true_false',
        prompt: 'Khi đệm bóng, lực đẩy bóng đi chủ yếu xuất phát từ việc duỗi khớp gối nâng trọng tâm cơ thể kết hợp với lực nâng của cánh tay.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo nguyên lí phát lực nhịp nhàng toàn thân trong bóng chuyền.'
      },
      {
        id: 'gdtc7-02-q4',
        type: 'fill_in',
        prompt: 'Tư thế đứng hai chân mở rộng bằng vai, gối hơi chùng, trọng tâm dồn đều hai chân để sẵn sàng đón bóng gọi là tư thế chuẩn ________.',
        correctAnswer: 'bị',
        points: 2,
        explanation: 'Tư thế chuẩn bị (Ready stance).'
      },
      {
        id: 'gdtc7-02-q5',
        type: 'essay',
        prompt: 'Em hãy nêu ý nghĩa của tinh thần phối hợp đồng đội và sự ăn ý giữa các vị trí trong một trận thi đấu bóng chuyền.',
        points: 2,
        explanation: 'Học sinh trình bày: Bóng chuyền là môn thể thao tập thể đòi hỏi sự tin tưởng, bọc lót cho nhau, phối hợp chuyền 1 chuẩn xác tạo điều kiện cho đồng đội chuyền 2 và đập bóng ghi điểm.'
      }
    ]
  },
  // ==========================================
  // HOẠT ĐỘNG TRẢI NGHIỆM KHỐI 7 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-hdtn7-01',
    title: 'Bài tập Hoạt động trải nghiệm 7: Kĩ năng Kiểm soát cảm xúc & Giải tỏa căng thẳng',
    subjectId: 'hoat-dong-trai-nghiem',
    grade: 7,
    description: 'Nhận diện các cảm xúc tích cực và tiêu cực (tức giận, lo âu, thất vọng), kĩ thuật hít thở sâu và các biện pháp cân bằng tâm lí tuổi dậy thì.',
    durationMinutes: 15,
    dueDate: '2026-12-17T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-hdtn-01',
    teacherName: 'Tổ Hoạt động Trải nghiệm',
    createdAt: '2026-10-25T10:45:00Z',
    questions: [
      {
        id: 'hdtn7-01-q1',
        type: 'single_choice',
        prompt: 'Khi cảm thấy vô cùng tức giận trước một tình huống bất đồng ý kiến với bạn, phản ứng nào sau đây thể hiện kĩ năng kiểm soát cảm xúc thông minh?',
        options: [
          'Dừng lại vài giây, hít một hơi thật sâu, đếm chậm từ 1 đến 10 trước khi lên tiếng hoặc rời khỏi đó để bình tĩnh lại',
          'Ngay lập tức quát tháo to tiếng và đập phá đồ dùng học tập',
          'Đăng bài bôi nhọ, nói xấu bạn trên mạng xã hội',
          'Ủ rũ nhịn ăn suốt nhiều ngày'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Kĩ thuật "Tạm dừng và hít thở sâu" giúp hạ hỏa bộ não và ngăn ngừa những hành vi bộc phát thiếu kiểm soát.'
      },
      {
        id: 'hdtn7-01-q2',
        type: 'multiple_choice',
        prompt: 'Những phương pháp lành mạnh giúp giải tỏa căng thẳng sau những giờ học tập căng thẳng là: (Chọn các phương án đúng)',
        options: [
          'Chơi thể thao (cầu lông, bóng đá, chạy bộ) giúp tiết hormone endorphin sảng khoái',
          'Nghe một bản nhạc êm dịu hoặc đọc quyển sách yêu thích',
          'Trò chuyện, tâm sự cởi mở với cha mẹ, thầy cô hoặc bạn thân',
          'Lạm dụng chất kích thích có hại cho sức khỏe'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Thể thao, âm nhạc và tâm sự cùng người thân là giải pháp giải tỏa áp lực tích cực.'
      },
      {
        id: 'hdtn7-01-q3',
        type: 'true_false',
        prompt: 'Cảm xúc tiêu cực như buồn bã hay tức giận là hoàn toàn bình thường ở con người, điều quan trọng là ta biết cách nhận diện và chuyển hóa chúng tích cực.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo tâm lí học hành vi ứng xử.'
      },
      {
        id: 'hdtn7-01-q4',
        type: 'fill_in',
        prompt: 'Khả năng đặt mình vào vị trí của người khác để thấu hiểu và chia sẻ cảm xúc với họ được gọi là sự thấu ________.',
        correctAnswer: 'cảm',
        points: 2,
        explanation: 'Sự thấu cảm (Empathy).'
      },
      {
        id: 'hdtn7-01-q5',
        type: 'essay',
        prompt: 'Em hãy kể lại một tình huống em từng gặp áp lực trong học tập hoặc cuộc sống và cách em đã vượt qua áp lực đó để trưởng thành hơn.',
        points: 2,
        explanation: 'Học sinh chia sẻ chân thực: Tình huống áp lực (điểm thi chưa như ý, bất đồng với bạn bè); Cách giải quyết (bình tĩnh xem lại lỗi sai, lập kế hoạch học tập mới, chủ động xin lỗi bạn); Bài học rút ra.'
      }
    ]
  },
  {
    id: 'asg-hdtn7-02',
    title: 'Bài tập Hoạt động trải nghiệm 7: Hoạt động Thiện nguyện & Trách nhiệm Xã hội',
    subjectId: 'hoat-dong-trai-nghiem',
    grade: 7,
    description: 'Tham gia các phong trào tình nguyện "Kế hoạch nhỏ", "Đền ơn đáp nghĩa", bảo vệ môi trường và lan tỏa lòng nhân ái trong cộng đồng.',
    durationMinutes: 15,
    dueDate: '2026-12-22T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-hdtn-01',
    teacherName: 'Tổ Hoạt động Trải nghiệm',
    createdAt: '2026-10-26T10:45:00Z',
    questions: [
      {
        id: 'hdtn7-02-q1',
        type: 'single_choice',
        prompt: 'Ý nghĩa cao đẹp nhất của phong trào thiếu nhi "Kế hoạch nhỏ" thu gom giấy vụn và vỏ lon phế liệu là gì?',
        options: [
          'Giáo dục ý thức tiết kiệm, bảo vệ môi trường và gây quỹ giúp đỡ các bạn học sinh có hoàn cảnh khó khăn vươn lên trong học tập',
          'Để học sinh ganh đua xem ai bán được nhiều tiền hơn',
          'Chỉ để nhà trường có thêm kinh phí xây dựng',
          'Bắt buộc học sinh phải mua phế liệu từ bên ngoài nộp cho đủ chỉ tiêu'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Phong trào Kế hoạch nhỏ giáo dục đức tính tiết kiệm, bảo vệ môi trường và lòng nhân ái vì cộng đồng.'
      },
      {
        id: 'hdtn7-02-q2',
        type: 'multiple_choice',
        prompt: 'Những hoạt động thiện nguyện nào phù hợp với lứa tuổi học sinh trung học cơ sở? (Chọn các phương án đúng)',
        options: [
          'Quyên góp sách báo, truyện cũ và đồ dùng học tập gửi tặng học sinh vùng sâu vùng xa',
          'Thăm hỏi, tặng quà và dọn dẹp vệ sinh tại đền tưởng niệm các Mẹ Việt Nam Anh hùng',
          'Tham gia ngày Chủ nhật Xanh dọn rác quanh khu vực trường học và kênh rạch',
          'Tổ chức biểu tình trái pháp luật'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Tặng sách vở, thăm Mẹ Việt Nam Anh hùng và tham gia Chủ nhật Xanh là những việc làm thiết thực, ý nghĩa.'
      },
      {
        id: 'hdtn7-02-q3',
        type: 'true_false',
        prompt: 'Làm việc thiện chỉ có giá trị khi đóng góp thật nhiều tiền của, còn công sức và sự sẻ chia tinh thần thì không mang lại ý nghĩa gì.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 1, // Sai
        points: 2,
        explanation: 'Sai. "Của cho không bằng cách cho", sự sẻ chia chân thành bằng tấm lòng và hành động cụ thể luôn mang giá trị nhân văn cao quý.'
      },
      {
        id: 'hdtn7-02-q4',
        type: 'fill_in',
        prompt: 'Truyền thống quý báu của dân tộc ta thể hiện qua câu tục ngữ "Lá lành đùm lá ________".',
        correctAnswer: 'rách',
        points: 2,
        explanation: 'Lá lành đùm lá rách.'
      },
      {
        id: 'hdtn7-02-q5',
        type: 'essay',
        prompt: 'Em hãy viết một đoạn văn (4-6 dòng) nêu cảm xúc sau khi tham gia một phong trào giúp đỡ bạn nghèo hoặc hoạt động vì cộng đồng tại trường THCS Mỹ Hòa.',
        points: 2,
        explanation: 'Học sinh nêu: Cảm thấy vui sướng và hạnh phúc khi mang lại nụ cười cho bạn bè; nhận thức sâu sắc hơn về giá trị của sự đùm bọc, yêu thương và trách nhiệm của bản thân với cộng đồng.'
      }
    ]
  },
  // ==========================================
  // GIÁO DỤC ĐỊA PHƯƠNG KHỐI 7 (2 BÀI TẬP)
  // ==========================================
  {
    id: 'asg-gddp7-01',
    title: 'Bài tập Giáo dục địa phương 7: Địa hình & Mạng lưới sông ngòi quê hương',
    subjectId: 'giao-duc-dia-phuong',
    grade: 7,
    description: 'Nghiên cứu đặc điểm địa hình đồng bằng trũng phù sa, hệ thống sông Tiền, sông Hậu và kênh rạch thủy lợi tại An Giang.',
    durationMinutes: 15,
    dueDate: '2026-12-18T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gddp-01',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-25T11:15:00Z',
    questions: [
      {
        id: 'gddp7-01-q1',
        type: 'single_choice',
        prompt: 'Tỉnh An Giang nằm ở vị trí đầu nguồn của hai nhánh sông lớn nào thuộc dòng Mekong chảy vào Việt Nam?',
        options: [
          'Sông Tiền và Sông Hậu',
          'Sông Hồng và Sông Đà',
          'Sông Đồng Nai và Sông Sài Gòn',
          'Sông Mã và Sông Chu'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'An Giang là tỉnh đầu nguồn sông Tiền và sông Hậu đón dòng nước ngọt và phù sa màu mỡ từ thượng nguồn Mekong.'
      },
      {
        id: 'gddp7-01-q2',
        type: 'multiple_choice',
        prompt: 'Mạng lưới sông ngòi và kênh rạch chằng chịt tại An Giang mang lại những giá trị kinh tế to lớn nào? (Chọn các phương án đúng)',
        options: [
          'Cung cấp nguồn nước ngọt tưới tiêu cho các cánh đồng lúa và hoa màu quanh năm',
          'Phát triển giao thông thủy và vận chuyển hàng hóa nông sản liên vùng',
          'Cung cấp nguồn thủy sản nước ngọt dồi dào (cá basa, cá tra, tôm càng xanh)',
          'Tạo điều kiện xây dựng các đập thủy điện công suất cực lớn trên núi cao'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Cung cấp nước tưới, giao thông thủy và thủy sản; địa hình đồng bằng bằng phẳng không xây dựng thủy điện lớn.'
      },
      {
        id: 'gddp7-01-q3',
        type: 'true_false',
        prompt: 'Kênh Thoại Hà và kênh Vĩnh Tế là hai công trình thủy lợi đào tay vĩ đại dưới triều Nguyễn do danh thần Thoại Ngọc Hầu chỉ huy đào đắp.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo lịch sử khai hoang mở cõi và trị thủy phương Nam của danh thần Thoại Ngọc Hầu.'
      },
      {
        id: 'gddp7-01-q4',
        type: 'fill_in',
        prompt: 'Con kênh biên giới lịch sử nối liền Châu Đốc với Hà Tiên mang tên kênh Vĩnh ________.',
        correctAnswer: 'tế',
        points: 2,
        explanation: 'Kênh Vĩnh Tế (được đặt tên theo phu nhân của Thoại Ngọc Hầu là bà Châu Thị Vĩnh Tế).'
      },
      {
        id: 'gddp7-01-q5',
        type: 'essay',
        prompt: 'Em hãy nêu các giải pháp mà người dân vùng Đồng bằng sông Cửu Long đang thực hiện để "sống chung với lũ" và biến lũ thành sinh kế mùa nước nổi có lợi.',
        points: 2,
        explanation: 'Học sinh trình bày: Đắp đê bao khép kín giữ lúa; xả lũ định kì lấy phù sa và diệt trừ sâu bọ; chuyển đổi mô hình nuôi tôm cá mùa lũ, hái bông điên điển, phát triển du lịch sinh thái rừng tràm.'
      }
    ]
  },
  {
    id: 'asg-gddp7-02',
    title: 'Bài tập Giáo dục địa phương 7: Danh nhân Lịch sử - Danh thần Thoại Ngọc Hầu',
    subjectId: 'giao-duc-dia-phuong',
    grade: 7,
    description: 'Tìm hiểu cuộc đời, sự nghiệp khai hoang, đào kênh Thoại Hà, Vĩnh Tế và công đức to lớn của Thoại Ngọc Hầu với vùng đất An Giang.',
    durationMinutes: 15,
    dueDate: '2026-12-23T23:59:59Z',
    maxScore: 10,
    passingScore: 5,
    maxAttempts: 2,
    status: 'published',
    targetAudience: 'all_grade',
    teacherId: 'u-teacher-gddp-01',
    teacherName: 'Tổ Ngữ văn',
    createdAt: '2026-10-26T11:15:00Z',
    questions: [
      {
        id: 'gddp7-02-q1',
        type: 'single_choice',
        prompt: 'Danh thần Thoại Ngọc Hầu tên thật là gì và quê gốc ở đâu?',
        options: [
          'Nguyễn Văn Thoại (quê tại Quảng Nam)',
          'Nguyễn Tri Phương (quê tại Thừa Thiên Huế)',
          'Trương Định (quê tại Quảng Ngãi)',
          'Nguyễn Trung Trực (quê tại Bình Định)'
        ],
        correctAnswer: 0,
        points: 2,
        explanation: 'Thoại Ngọc Hầu tên thật là Nguyễn Văn Thoại, sinh năm 1761 tại huyện Diên Phước, phủ Điện Bàn, tỉnh Quảng Nam.'
      },
      {
        id: 'gddp7-02-q2',
        type: 'multiple_choice',
        prompt: 'Khu lăng mộ và đền thờ Thoại Ngọc Hầu hiện nay tọa lạc tại địa điểm du lịch văn hóa nổi tiếng nào của An Giang? (Chọn các phương án đúng)',
        options: [
          'Chân núi Sam (thành phố Châu Đốc)',
          'Khu di tích Lăng Thoại Ngọc Hầu',
          'Đình thần Thoại Ngọc Hầu tại thị trấn Núi Sập (Thoại Sơn)',
          'Trên đỉnh núi Phan Xi Păng'
        ],
        correctAnswer: [0, 1, 2],
        points: 2,
        explanation: 'Lăng Thoại Ngọc Hầu nằm tại chân núi Sam Châu Đốc và Đền thờ Thoại Ngọc Hầu tại Núi Sập Thoại Sơn.'
      },
      {
        id: 'gddp7-02-q3',
        type: 'true_false',
        prompt: 'Bia Thoại Sơn khắc ghi công đức đào kênh Thoại Hà hiện vẫn được bảo tồn nguyên vẹn và được công nhận là Bảo vật quốc gia.',
        options: ['Đúng', 'Sai'],
        correctAnswer: 0, // Đúng
        points: 2,
        explanation: 'Đúng theo quyết định công nhận bảo vật quốc gia của Thủ tướng Chính phủ.'
      },
      {
        id: 'gddp7-02-q4',
        type: 'fill_in',
        prompt: 'Để tưởng nhớ công lao đào kênh Thoại Hà của ông, triều đình nhà Nguyễn đã cho phép đặt tên ngọn núi Sập là núi Thoại ________.',
        correctAnswer: 'sơn',
        points: 2,
        explanation: 'Thoại Sơn (núi Thoại).'
      },
      {
        id: 'gddp7-02-q5',
        type: 'essay',
        prompt: 'Từ tấm gương của danh thần Thoại Ngọc Hầu trọn đời vì dân vì nước khai phá bờ cõi phương Nam, em rút ra bài học gì về trách nhiệm cống hiến xây dựng quê hương?',
        points: 2,
        explanation: 'Học sinh nêu: Noi gương tiền nhân dám nghĩ dám làm, không quản ngại gian khổ; nỗ lực học tập thành tài đem tri thức khoa học công nghệ về dựng xây quê hương ngày càng giàu đẹp, văn minh.'
      }
    ]
  }
];


