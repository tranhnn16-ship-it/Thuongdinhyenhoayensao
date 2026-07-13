(function () {
  'use strict';

  var TIER_NOTE = 'Mua 1–10 hũ: 79.000đ/hũ · Từ hũ thứ 10: 69.000đ/hũ · Từ hũ thứ 100: 60.000đ/hũ · Thùng 105 hũ: 6.000.000đ/thùng';

  var PRODUCTS = [
    {
      id: 'yen-dao',
      badge: '100% Yến Đảo',
      name: 'Tổ Yến Chưng Yến Đảo 100%',
      img: 'assets/images/jar-yendao.webp',
      price: '189.000đ/hũ',
      tiers: '',
      desc: 'Sản phẩm dinh dưỡng đặc biệt tại Thượng Đỉnh Yến Hoa, được chiết xuất hoàn toàn từ tổ yến tự nhiên từ các đảo yến. Hàm lượng yến gần như tuyệt đối trên mỗi lọ sản phẩm, giữ trọn các dưỡng chất tự nhiên, mang lại nhiều lợi ích cho sức khỏe và sắc đẹp.',
      ingredients: 'Nước, sợi yến tươi (16g), đường phèn, chất ổn định (INS 406), hương liệu yến tổng hợp.',
      uses: [
        'Tăng cường sức khỏe và sức đề kháng: protein, axit amin và glycoprotein giúp tái tạo tế bào và nâng cao khả năng đề kháng của cơ thể, phục hồi nhanh sau mệt mỏi và căng thẳng.',
        'Hỗ trợ tiêu hóa và cung cấp năng lượng: dễ tiêu hóa, phù hợp mọi đối tượng, cung cấp năng lượng bền vững, cải thiện trao đổi chất.',
        'Hỗ trợ hệ hô hấp: làm dịu các triệu chứng khó chịu của đường hô hấp, hỗ trợ cải thiện chức năng phổi.',
        'Hỗ trợ làm đẹp và chống lão hóa: collagen tự nhiên và chất chống oxy hóa nuôi dưỡng làn da từ bên trong, giảm nếp nhăn, tăng độ đàn hồi.',
        'Phục hồi sau bệnh và tăng cường sinh lực: lựa chọn lý tưởng cho giai đoạn hồi phục sau bệnh, phẫu thuật hoặc cần bồi bổ dinh dưỡng.'
      ],
      usage: [
        'Đối tượng sử dụng: người lớn, trẻ em từ 1 tuổi trở lên, phụ nữ mang thai (4 tháng trở lên) và người cao tuổi.',
        'Liều lượng khuyến nghị: 1 hũ/ngày.',
        'Cách dùng: ngon hơn khi uống lạnh.'
      ],
      storage: 'Không dùng sản phẩm khi có dấu hiệu mở nắp, không sử dụng với người dị ứng với thành phần sản phẩm. Không sử dụng sản phẩm khi đã hết hạn sử dụng.'
    },
    {
      id: 'kids-cam',
      badge: '40% Sợi Yến',
      name: 'Tổ Yến Chưng Kids Hương Cam',
      img: 'assets/images/jar-kids-cam.webp',
      price: '89.000đ/hũ',
      tiers: TIER_NOTE,
      desc: 'Lựa chọn dinh dưỡng tuyệt vời cho trẻ em, nhờ thành phần từ yến sào cao cấp hỗ trợ sự phát triển toàn diện. Sản phẩm không chỉ bổ dưỡng mà còn thơm ngon, dễ uống, đáp ứng nhu cầu dinh dưỡng hàng ngày của trẻ.',
      ingredients: 'Nước, sợi yến (40%), đường phèn, chất làm dày (INS 401, INS 327), chất ổn định (INS 406, INS 415), taurine, lysine, vitamin D3, hương cam tổng hợp.',
      uses: [
        'Tăng cường sức khỏe và đề kháng: 40% sợi yến tươi giàu protein và axit amin thiết yếu, giúp tăng cường hệ miễn dịch. Taurine hỗ trợ chức năng miễn dịch và bảo vệ tế bào.',
        'Hỗ trợ phát triển thể chất: Vitamin D3 thúc đẩy hấp thụ canxi, phốt pho, phát triển hệ xương và răng vững chắc; Lysine tăng khả năng hấp thu dinh dưỡng, cải thiện chiều cao.',
        'Cải thiện tiêu hóa và hấp thụ dinh dưỡng, kích thích vị giác, hạn chế kén ăn; Taurine giúp trẻ thư giãn, ngủ sâu giấc hơn.',
        'Bổ sung năng lượng và phát triển trí não: Lysine và Taurine hỗ trợ phát triển não bộ, tăng khả năng tập trung, học tập, cải thiện trí nhớ.'
      ],
      usage: [
        'Nên cho trẻ sử dụng mỗi ngày 1 hũ, ngon hơn khi uống lạnh.',
        'Phù hợp với trẻ em từ 1 tuổi trở lên.'
      ],
      storage: 'Không dùng sản phẩm khi có dấu hiệu mở nắp, không sử dụng với người dị ứng với thành phần sản phẩm. Không sử dụng sản phẩm khi đã hết hạn sử dụng.'
    },
    {
      id: 'duong-phen',
      badge: '40% Sợi Yến',
      name: 'Tổ Yến Chưng Đường Phèn',
      img: 'assets/images/jar-duongphen.webp',
      price: '89.000đ/hũ',
      tiers: TIER_NOTE,
      desc: 'Sản phẩm dinh dưỡng cao cấp với các thành phần tự nhiên và công thức tối ưu, mang lại nhiều lợi ích cho sức khỏe. Không chỉ giúp bồi bổ cơ thể mà còn hỗ trợ sức khỏe lâu dài, là lựa chọn hoàn hảo cho chế độ dinh dưỡng hàng ngày.',
      ingredients: 'Nước, sợi yến (40%), đường phèn (8.5%), chất làm dày (INS 401, INS 327), chất ổn định (INS 406, INS 415), hương yến tổng hợp.',
      uses: [
        'Tăng cường sức khỏe và đề kháng: 40% sợi yến tươi giàu protein, axit amin và khoáng chất thiết yếu, giúp tăng cường hệ miễn dịch.',
        'Hỗ trợ làm đẹp và chống lão hóa: collagen và vi chất giúp làm đẹp da, duy trì độ đàn hồi, ngăn ngừa lão hóa.',
        'Thúc đẩy tiêu hóa và hấp thụ dinh dưỡng.',
        'Tăng cường năng lượng và phục hồi sức khỏe: phù hợp cho người cần hồi phục sau bệnh hoặc hoạt động căng thẳng.'
      ],
      usage: [
        'Đối tượng sử dụng: người lớn, trẻ em từ 1 tuổi trở lên, phụ nữ mang thai (4 tháng trở lên) và người cao tuổi.',
        'Khuyến nghị dùng 1 hũ/ngày.',
        'Cách dùng: ngon hơn khi uống lạnh.'
      ],
      storage: 'Không dùng sản phẩm khi có dấu hiệu mở nắp, không sử dụng với người dị ứng với thành phần sản phẩm. Không sử dụng sản phẩm khi đã hết hạn sử dụng.'
    },
    {
      id: 'saffron',
      badge: '40% Sợi Yến',
      name: 'Tổ Yến Chưng Saffron',
      img: 'assets/images/jar-saffron.webp',
      price: '89.000đ/hũ',
      tiers: TIER_NOTE,
      desc: 'Sản phẩm cao cấp kết hợp giữa tổ yến thiên nhiên và nhụy hoa nghệ tây (saffron), mang đến nhiều lợi ích nổi bật cho sức khỏe và sắc đẹp. Không chỉ là một sản phẩm dinh dưỡng mà còn là món quà ý nghĩa cho bản thân và người thân yêu.',
      ingredients: 'Nước, sợi yến (40%), đường phèn, nhụy hoa nghệ tây saffron (2%), chất làm dày (INS 401, INS 327), chất ổn định (INS 406, INS 415), phẩm màu tổng hợp (INS 102), hương yến tổng hợp.',
      uses: [
        'Bồi bổ sức khỏe và tăng cường hệ miễn dịch: saffron chứa chất chống oxy hóa mạnh như crocin, crocetin, giúp giảm viêm và tăng cường sức đề kháng.',
        'Làm đẹp da và chống lão hóa: sợi yến thúc đẩy sản sinh collagen; saffron cải thiện sắc tố da, làm sáng da, giảm khô ráp.',
        'Cải thiện giấc ngủ và tinh thần: saffron có tác dụng làm dịu thần kinh, cải thiện chất lượng giấc ngủ, giảm căng thẳng.',
        'Tăng cường năng lượng và phục hồi sức khỏe, phù hợp cho người cần hồi phục sau bệnh hoặc hoạt động căng thẳng.'
      ],
      usage: [
        'Đối tượng sử dụng: người lớn, trẻ em từ 1 tuổi trở lên, phụ nữ mang thai (4 tháng trở lên) và người cao tuổi.',
        'Khuyến nghị dùng 1 hũ/ngày.',
        'Cách dùng: ngon hơn khi uống lạnh.'
      ],
      storage: 'Không dùng sản phẩm khi có dấu hiệu mở nắp, không sử dụng với người dị ứng với thành phần sản phẩm. Không sử dụng sản phẩm khi đã hết hạn sử dụng.'
    },
    {
      id: 'dong-trung-ha-thao',
      badge: '40% Sợi Yến',
      name: 'Tổ Yến Chưng Đông Trùng Hạ Thảo',
      img: 'assets/images/jar-dongtrunghathao.webp',
      price: '89.000đ/hũ',
      tiers: TIER_NOTE,
      desc: 'Sản phẩm cao cấp kết hợp giữa tổ yến thiên nhiên và đông trùng hạ thảo, mang lại nhiều giá trị dinh dưỡng và sức khỏe vượt trội. Sự kết hợp hoàn hảo giữa hai nguyên liệu quý giá, phù hợp làm quà tặng ý nghĩa cho người thân và bạn bè.',
      ingredients: 'Nước, sợi yến (40%), đường phèn, đông trùng hạ thảo (2%), chất làm dày (INS 401, INS 327), chất ổn định (INS 406, INS 415), hương yến tổng hợp.',
      uses: [
        'Tăng cường sức khỏe và sức đề kháng: đông trùng hạ thảo giàu cordycepin và adenosine, giúp tăng cường sức đề kháng, bảo vệ cơ thể khỏi các bệnh lý thường gặp.',
        'Bồi bổ năng lượng và cải thiện thể lực: hỗ trợ tăng cường oxy đến các cơ quan, cải thiện thể lực và khả năng vận động.',
        'Hỗ trợ chức năng hô hấp và tim mạch: có tác dụng bổ phổi, giảm ho, cải thiện triệu chứng suy nhược phổi; adenosine tăng cường lưu thông máu, bảo vệ tim mạch.',
        'Hỗ trợ làm đẹp và chống lão hóa: chống oxy hóa, bảo vệ tế bào khỏi tổn thương, duy trì sự tươi trẻ cho làn da.',
        'Cải thiện giấc ngủ và tinh thần: tác dụng an thần nhẹ, giúp cải thiện giấc ngủ và giảm căng thẳng.'
      ],
      usage: [
        'Đối tượng sử dụng: người lớn, trẻ em từ 1 tuổi trở lên, phụ nữ mang thai (4 tháng trở lên) và người cao tuổi.',
        'Liều lượng khuyến nghị: 1 hũ/ngày.',
        'Cách dùng: ngon hơn khi uống lạnh.'
      ],
      storage: 'Không dùng sản phẩm khi có dấu hiệu mở nắp, không sử dụng với người dị ứng với thành phần sản phẩm. Không sử dụng sản phẩm khi đã hết hạn sử dụng.'
    },
    {
      id: 'tao-do',
      badge: '40% Sợi Yến',
      name: 'Tổ Yến Chưng Táo Đỏ',
      img: 'assets/images/jar-taodo.webp',
      price: '89.000đ/hũ',
      tiers: TIER_NOTE,
      desc: 'Sản phẩm cao cấp kết hợp giữa tổ yến thiên nhiên và táo đỏ, một món ăn được đánh giá cao trong y học cổ truyền. Mang lại nhiều giá trị dinh dưỡng, chăm sóc sức khỏe, tăng cường thể chất và làm đẹp, phù hợp làm quà tặng ý nghĩa.',
      ingredients: 'Nước, sợi yến (40%), đường phèn, táo đỏ (2%), chất làm dày (INS 401, INS 327), chất ổn định (INS 406, INS 415), hương yến tổng hợp.',
      uses: [
        'Tăng cường sức khỏe và sức đề kháng: táo đỏ giúp bổ máu, cải thiện tuần hoàn và cung cấp vitamin cần thiết.',
        'Hỗ trợ cho làn da và chống lão hóa: táo đỏ với chất chống oxy hóa tự nhiên hỗ trợ bảo vệ làn da khỏi tác động của môi trường.',
        'Hỗ trợ tiêu hóa và phục hồi: bổ sung dinh dưỡng nhẹ nhàng, dễ tiêu hóa, đặc biệt hữu ích cho người sau phẫu thuật, phụ nữ sau sinh hay người có sức khỏe yếu.'
      ],
      usage: [
        'Đối tượng sử dụng: người lớn, trẻ em từ 1 tuổi trở lên, phụ nữ mang thai (4 tháng trở lên) và người cao tuổi.',
        'Liều lượng khuyến nghị: 1 hũ/ngày.',
        'Cách dùng: ngon hơn khi uống lạnh.'
      ],
      storage: 'Không dùng sản phẩm khi có dấu hiệu mở nắp, không sử dụng với người dị ứng với thành phần sản phẩm. Không sử dụng sản phẩm khi đã hết hạn sử dụng.'
    },
    {
      id: 'ky-tu',
      badge: '40% Sợi Yến',
      name: 'Tổ Yến Chưng Kỷ Tử',
      img: 'assets/images/jar-kytu.webp',
      price: '89.000đ/hũ',
      tiers: TIER_NOTE,
      desc: 'Sự kết hợp hoàn hảo giữa những dưỡng chất quý giá từ tổ yến tự nhiên và kỷ tử – loại quả quen thuộc trong y học cổ truyền, giàu vitamin cùng các chất chống oxy hóa. Không chỉ là món ăn bổ dưỡng mà còn là "bí quyết" chăm sóc sức khỏe và sắc đẹp từ bên trong.',
      ingredients: 'Nước, sợi yến (40%), đường phèn, kỷ tử (2%), chất làm dày (INS 401, INS 327), chất ổn định (INS 406, INS 415), hương yến tổng hợp.',
      uses: [
        'Tăng cường sức khỏe và hệ miễn dịch: kỷ tử cung cấp vitamin, khoáng chất và chất chống oxy hóa, giúp cải thiện sức đề kháng.',
        'Hỗ trợ phục hồi sau bệnh và cải thiện tiêu hóa: thích hợp cho giai đoạn phục hồi sau bệnh, phẫu thuật hay sau sinh.',
        'Hỗ trợ làm đẹp da và chống lão hóa: kỷ tử với chất chống oxy hóa tự nhiên góp phần làm chậm quá trình lão hóa.',
        'Tăng cường sinh lực và hỗ trợ cải thiện thị lực: kỷ tử hỗ trợ cải thiện thị lực, bảo vệ đôi mắt và giảm thiểu vấn đề liên quan đến tuổi tác.'
      ],
      usage: [
        'Đối tượng sử dụng: người lớn, trẻ em từ 1 tuổi trở lên, phụ nữ mang thai (4 tháng trở lên) và người cao tuổi.',
        'Liều lượng khuyến nghị: 1 hũ/ngày.',
        'Cách dùng: ngon hơn khi uống lạnh.'
      ],
      storage: 'Không dùng sản phẩm khi có dấu hiệu mở nắp, không sử dụng với người dị ứng với thành phần sản phẩm. Không sử dụng sản phẩm khi đã hết hạn sử dụng.'
    },
    {
      id: 'collagen',
      badge: '40% Sợi Yến',
      name: 'Tổ Yến Chưng Collagen',
      img: 'assets/images/jar-collagen.webp',
      price: '89.000đ/hũ',
      tiers: TIER_NOTE,
      desc: 'Sản phẩm kết hợp giữa tổ yến – nguồn dinh dưỡng quý giá từ thiên nhiên và collagen – thành phần chủ lực giúp duy trì độ săn chắc của làn da. Mang lại hương vị thơm ngon, dễ tiêu hóa cùng nhiều lợi ích cho sức khỏe và sắc đẹp.',
      ingredients: 'Nước, sợi yến (40%), đường phèn, collagen (2%), chất làm dày (INS 401, INS 327), chất ổn định (INS 406, INS 415), hương yến tổng hợp.',
      uses: [
        'Tăng cường sức khỏe và hệ miễn dịch: collagen góp phần tăng cường cấu trúc mô liên kết, hỗ trợ chức năng các cơ quan trong cơ thể.',
        'Chăm sóc sắc đẹp và chống lão hóa: collagen giúp cải thiện độ đàn hồi, giảm nếp nhăn, làm săn chắc làn da.',
        'Hỗ trợ sức khỏe khớp và xương: giúp duy trì sức khỏe khớp và xương, giảm thiểu dấu hiệu thoái hóa theo thời gian.',
        'Giúp phục hồi sau bệnh và duy trì năng lượng, phù hợp giai đoạn sau bệnh, phẫu thuật hay cần bồi bổ sức khỏe.'
      ],
      usage: [
        'Đối tượng sử dụng: người lớn, trẻ em từ 1 tuổi trở lên, phụ nữ mang thai (4 tháng trở lên) và người cao tuổi.',
        'Liều lượng khuyến nghị: 1 hũ/ngày.',
        'Cách dùng: ngon hơn khi uống lạnh.'
      ],
      storage: 'Không dùng sản phẩm khi có dấu hiệu mở nắp, không sử dụng với người dị ứng với thành phần sản phẩm. Không sử dụng sản phẩm khi đã hết hạn sử dụng.'
    },
    {
      id: 'nhan-sam',
      badge: '40% Sợi Yến',
      name: 'Tổ Yến Chưng Nhân Sâm',
      img: 'assets/images/jar-nhansam.webp',
      price: '89.000đ/hũ',
      tiers: TIER_NOTE,
      desc: 'Sản phẩm cao cấp, kết hợp giữa tổ yến thiên nhiên và nhân sâm – "vị thuốc" trong y học cổ truyền nổi tiếng với nhiều giá trị dinh dưỡng. Sự kết hợp hoàn hảo mang lại hiệu quả tối ưu trong việc chăm sóc sức khỏe, tăng cường thể chất và làm đẹp.',
      ingredients: 'Nước, sợi yến (40%), đường phèn, đông trùng hạ thảo (2%), chất làm dày (INS 401, INS 327), chất ổn định (INS 406, INS 415), hương yến tổng hợp.',
      uses: [
        'Tăng cường sức khỏe và đề kháng: nhân sâm kích thích sức khỏe tổng thể, giúp cơ thể phục hồi nhanh chóng sau mệt mỏi, căng thẳng hoặc bệnh tật.',
        'Bồi bổ và cung cấp năng lượng: cải thiện quá trình trao đổi chất và tăng cường sức sống cho cơ thể.',
        'Hỗ trợ chức năng não bộ và giảm căng thẳng: nhân sâm giúp cải thiện tuần hoàn máu, tăng cường chức năng não bộ, hỗ trợ trí nhớ.',
        'Hỗ trợ làm đẹp và chống lão hóa: nhân sâm với đặc tính chống oxy hóa bảo vệ da khỏi tác động môi trường, làm chậm quá trình lão hóa.'
      ],
      usage: [
        'Đối tượng sử dụng: người lớn, trẻ em từ 1 tuổi trở lên, phụ nữ mang thai (4 tháng trở lên) và người cao tuổi.',
        'Liều lượng khuyến nghị: 1 hũ/ngày.',
        'Cách dùng: ngon hơn khi uống lạnh.'
      ],
      storage: 'Không dùng sản phẩm khi có dấu hiệu mở nắp, không sử dụng với người dị ứng với thành phần sản phẩm. Không sử dụng sản phẩm khi đã hết hạn sử dụng.',
      note: 'Bảng thành phần trong tài liệu gốc của mục này liệt kê "đông trùng hạ thảo" thay vì nhân sâm – có thể là sai sót khi soạn thảo, nên rà soát lại trước khi in ấn.'
    },
    {
      id: 'tu-vi',
      badge: '40% Sợi Yến',
      name: 'Tổ Yến Chưng Tứ Vị',
      img: 'assets/images/jar-tuvi.webp',
      price: '89.000đ/hũ',
      tiers: TIER_NOTE,
      desc: 'Sản phẩm kết hợp giữa 40% tổ yến và 4 loại thảo quả: táo đỏ, kỷ tử, long nhãn, hạt chia mang lại nhiều công dụng cho sức khỏe tổng thể và sắc đẹp. Phù hợp sử dụng trong gia đình hay làm quà tặng biếu.',
      ingredients: 'Nước, sợi yến (40%), đường phèn, táo đỏ (2%), long nhãn (2%), hạt chia (2%), kỷ tử (2%), chất làm dày (INS 327, INS 401, INS 406), chất ổn định (INS 415, INS 406), hương yến tổng hợp.',
      uses: [
        'Tăng cường sức khỏe và sức đề kháng: táo đỏ, kỷ tử, long nhãn và hạt chia bổ sung thêm vitamin, khoáng chất và chất chống oxy hóa.',
        'Hỗ trợ tuần hoàn máu và bổ máu: táo đỏ nổi tiếng với công dụng bổ máu, cải thiện tuần hoàn; kỷ tử và long nhãn nuôi dưỡng máu, hỗ trợ sức khỏe tim mạch.',
        'Hỗ trợ làm đẹp và chống lão hóa: chất chống oxy hóa từ kỷ tử, hạt chia góp phần nuôi dưỡng làn da từ bên trong, giảm nếp nhăn.',
        'Hỗ trợ tiêu hóa và duy trì năng lượng: hạt chia cung cấp omega-3, chất xơ, giúp hỗ trợ tiêu hóa và cân bằng đường huyết.',
        'Tăng cường sinh lực và phục hồi sau mệt mỏi: phù hợp cho người cần phục hồi sau bệnh tật, phẫu thuật hay giai đoạn căng thẳng.'
      ],
      usage: [
        'Đối tượng sử dụng: người lớn, trẻ em từ 1 tuổi trở lên, phụ nữ mang thai (4 tháng trở lên) và người cao tuổi.',
        'Liều lượng khuyến nghị: 1 hũ/ngày.',
        'Cách dùng: ngon hơn khi uống lạnh.'
      ],
      storage: 'Không dùng sản phẩm khi có dấu hiệu mở nắp, không sử dụng với người dị ứng với thành phần sản phẩm. Không sử dụng sản phẩm khi đã hết hạn sử dụng.'
    }
  ];

  // ---------- Render carousel cards ----------
  var track = document.getElementById('jarTrack');
  PRODUCTS.forEach(function (p) {
    var card = document.createElement('article');
    card.className = 'jar-card';
    card.innerHTML =
      '<div class="jar-card__media"><img src="' + p.img + '" alt="' + p.name + '" loading="lazy"></div>' +
      '<div class="jar-card__body">' +
        '<span class="jar-card__badge">' + p.badge + '</span>' +
        '<h3 class="jar-card__name">' + p.name + '</h3>' +
        '<button type="button" class="jar-card__btn" data-id="' + p.id + '">Xem chi tiết &rarr;</button>' +
      '</div>';
    track.appendChild(card);
  });

  // ---------- Carousel nav (prev/next + dots) ----------
  var viewport = track;
  var prevBtn = document.getElementById('jarPrev');
  var nextBtn = document.getElementById('jarNext');
  var dotsWrap = document.getElementById('jarDots');
  var cards = Array.prototype.slice.call(track.children);

  cards.forEach(function (_, i) {
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', 'Xem sản phẩm ' + (i + 1));
    dot.addEventListener('click', function () { scrollToCard(i); });
    dotsWrap.appendChild(dot);
  });
  var dots = Array.prototype.slice.call(dotsWrap.children);

  function cardStep() {
    return cards[0] ? cards[0].getBoundingClientRect().width + 22.4 : 260;
  }
  function scrollToCard(i) {
    viewport.scrollTo({ left: cardStep() * i, behavior: 'smooth' });
  }
  function updateDots() {
    var i = Math.round(viewport.scrollLeft / cardStep());
    dots.forEach(function (d, idx) { d.classList.toggle('is-active', idx === i); });
  }
  viewport.addEventListener('scroll', function () {
    window.requestAnimationFrame(updateDots);
  }, { passive: true });

  prevBtn.addEventListener('click', function () {
    viewport.scrollBy({ left: -cardStep() * 2, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', function () {
    viewport.scrollBy({ left: cardStep() * 2, behavior: 'smooth' });
  });

  updateDots();

  // ---------- Modal ----------
  var modal = document.getElementById('jarModal');
  var modalImg = document.getElementById('jarModalImg');
  var modalEyebrow = document.getElementById('jarModalEyebrow');
  var modalTitle = document.getElementById('jarModalTitle');
  var modalPrice = document.getElementById('jarModalPrice');
  var modalTiers = document.getElementById('jarModalTiers');
  var modalDesc = document.getElementById('jarModalDesc');
  var modalIngredients = document.getElementById('jarModalIngredients');
  var modalUses = document.getElementById('jarModalUses');
  var modalUsage = document.getElementById('jarModalUsage');
  var modalStorage = document.getElementById('jarModalStorage');
  var closeBtn = document.getElementById('jarModalClose');
  var backdrop = document.getElementById('jarModalBackdrop');

  function fillList(el, items) {
    el.innerHTML = '';
    items.forEach(function (text) {
      var li = document.createElement('li');
      li.textContent = text;
      el.appendChild(li);
    });
  }

  function openModal(id) {
    var p = PRODUCTS.filter(function (item) { return item.id === id; })[0];
    if (!p) return;

    modalImg.setAttribute('src', p.img);
    modalImg.setAttribute('alt', p.name);
    modalEyebrow.textContent = p.badge;
    modalTitle.textContent = p.name;
    modalPrice.textContent = p.price;
    modalTiers.textContent = p.tiers + (p.note ? '  ' + p.note : '');
    modalDesc.textContent = p.desc;
    modalIngredients.textContent = p.ingredients;
    fillList(modalUses, p.uses);
    fillList(modalUsage, p.usage);
    modalStorage.textContent = p.storage;

    // Reset to first tab
    document.querySelectorAll('.jar-modal__tab').forEach(function (btn, i) {
      btn.classList.toggle('is-active', i === 0);
      btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    });
    document.querySelectorAll('.jar-modal__panel').forEach(function (panel) {
      panel.classList.toggle('is-active', panel.getAttribute('data-panel') === 'mota');
    });

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('jar-modal-open');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('jar-modal-open');
  }

  track.addEventListener('click', function (e) {
    var btn = e.target.closest('.jar-card__btn');
    if (btn) openModal(btn.getAttribute('data-id'));
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  document.querySelectorAll('.jar-modal__tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');
      document.querySelectorAll('.jar-modal__tab').forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      document.querySelectorAll('.jar-modal__panel').forEach(function (panel) {
        panel.classList.toggle('is-active', panel.getAttribute('data-panel') === target);
      });
    });
  });
})();
