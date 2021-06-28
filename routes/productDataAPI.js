const express = require("express");
const router = express.Router();

const ProductsData = [
  {
    id: "001",
    name: "Áo khoác Jeans",
    category: "Áo khoác",
    thumbnail: "/images/thumb1.png",
    image: "/images/hinh1.jpg",
    amount: 1,
    status: "Sắp hết",
    price: 200000,
    des: "Áo khoác Jean nữ là một trong những kiểu áo khoác không thể thiếu của phái đẹp.Nó luôn mang đến sự trẻ trung, năng động và đặc biệt là rất cá tính. Dù trong tủ đồ có nhiều kiểu áo khoác như thế nào thì áo Jean vẫn chiếm một vị trí vô cùng quan trọng. Dù ra đời khá lâu nhưng áo khoác Jeans chưa bao giờ tỏ ra “lỗi mốt”. Nàng đã quá nhàm chán với những mẫu áo khoác quen thuộc như Jacket, Cardigan? Nếu muốn thay đổi style hằng ngày của mình thì item đậm chất đường phố này là một gợi ý hay dành cho bạn đấy. Biết đâu bạn sẽ thích phong cách này thì sao?",
  },
  {
    id: "002",
    name: "Áo khoác nỉ",
    category: "Áo khoác",
    thumbnail: "/images/thumb2.png",
    image: "/images/hinh2.jpg",
    amount: 20,
    status: "Còn",
    price: 200000,
    des: "Áo khoác Jean nữ là một trong những kiểu áo khoác không thể thiếu của phái đẹp.Nó luôn mang đến sự trẻ trung, năng động và đặc biệt là rất cá tính. Dù trong tủ đồ có nhiều kiểu áo khoác như thế nào thì áo Jean vẫn chiếm một vị trí vô cùng quan trọng. Dù ra đời khá lâu nhưng áo khoác Jeans chưa bao giờ tỏ ra “lỗi mốt”. Nàng đã quá nhàm chán với những mẫu áo khoác quen thuộc như Jacket, Cardigan? Nếu muốn thay đổi style hằng ngày của mình thì item đậm chất đường phố này là một gợi ý hay dành cho bạn đấy. Biết đâu bạn sẽ thích phong cách này thì sao?",
  },
  {
    id: "003",
    name: "Quần Baggy ống rộng",
    category: "Quần dài",
    thumbnail: "/images/thumb3.png",
    image: "/images/hinh3.jpg",
    amount: 2,
    status: "Sắp hết",
    price: 200000,
    des: "Áo khoác Jean nữ là một trong những kiểu áo khoác không thể thiếu của phái đẹp.Nó luôn mang đến sự trẻ trung, năng động và đặc biệt là rất cá tính. Dù trong tủ đồ có nhiều kiểu áo khoác như thế nào thì áo Jean vẫn chiếm một vị trí vô cùng quan trọng. Dù ra đời khá lâu nhưng áo khoác Jeans chưa bao giờ tỏ ra “lỗi mốt”. Nàng đã quá nhàm chán với những mẫu áo khoác quen thuộc như Jacket, Cardigan? Nếu muốn thay đổi style hằng ngày của mình thì item đậm chất đường phố này là một gợi ý hay dành cho bạn đấy. Biết đâu bạn sẽ thích phong cách này thì sao?",
  },
  {
    id: "004",
    name: "Áo thun sọc ngang",
    category: "Áo thun",
    thumbnail: "/images/thumb4.png",
    image: "/images/hinh4.jpg",
    amount: 15,
    status: "Còn",
    price: 200000,
    des: "Áo khoác Jean nữ là một trong những kiểu áo khoác không thể thiếu của phái đẹp.Nó luôn mang đến sự trẻ trung, năng động và đặc biệt là rất cá tính. Dù trong tủ đồ có nhiều kiểu áo khoác như thế nào thì áo Jean vẫn chiếm một vị trí vô cùng quan trọng. Dù ra đời khá lâu nhưng áo khoác Jeans chưa bao giờ tỏ ra “lỗi mốt”. Nàng đã quá nhàm chán với những mẫu áo khoác quen thuộc như Jacket, Cardigan? Nếu muốn thay đổi style hằng ngày của mình thì item đậm chất đường phố này là một gợi ý hay dành cho bạn đấy. Biết đâu bạn sẽ thích phong cách này thì sao?",
  },
  {
    id: "005",
    name: "Đầm công sở",
    category: "Đầm",
    thumbnail: "/images/thumb5.png",
    image: "/images/hinh5.jpg",
    amount: 0,
    status: "Hết",
    price: 200000,
    des: "Áo khoác Jean nữ là một trong những kiểu áo khoác không thể thiếu của phái đẹp.Nó luôn mang đến sự trẻ trung, năng động và đặc biệt là rất cá tính. Dù trong tủ đồ có nhiều kiểu áo khoác như thế nào thì áo Jean vẫn chiếm một vị trí vô cùng quan trọng. Dù ra đời khá lâu nhưng áo khoác Jeans chưa bao giờ tỏ ra “lỗi mốt”. Nàng đã quá nhàm chán với những mẫu áo khoác quen thuộc như Jacket, Cardigan? Nếu muốn thay đổi style hằng ngày của mình thì item đậm chất đường phố này là một gợi ý hay dành cho bạn đấy. Biết đâu bạn sẽ thích phong cách này thì sao?",
  },
];

router.get("/", (req, res, next) => {
  res.send(ProductsData);
});

module.exports = router;
