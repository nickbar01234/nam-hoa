import { OptionType, Restaurants } from "@/types";

export const RESTAURANTS: Restaurants = {
  "nam-hoa": {
    name: "Nam Hoa",
    menu: [
      {
        category: "Món Nước",
        name: "Mì cá viên",
        price: 55_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [
          {
            type: OptionType.SINGLE_CHOICE,
            label: "Sợi",
            choices: ["Mì", "Hủ Tiếu"],
          },
          {
            type: OptionType.SINGLE_CHOICE,
            label: "Loại",
            choices: ["Khô", "Nước"],
          },
        ],
      },
      {
        category: "Món Nước",
        name: "Mì xá xíu",
        price: 35_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [
          {
            type: OptionType.SINGLE_CHOICE,
            label: "Sợi",
            choices: ["Mì", "Hủ Tiếu"],
          },
          {
            type: OptionType.SINGLE_CHOICE,
            label: "Loại",
            choices: ["Khô", "Nước"],
          },
        ],
      },
      {
        category: "Dimsum",
        name: "Xíu mại",
        price: 45_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
      {
        category: "Dimsum",
        name: "Há cảo tôm",
        price: 45_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
      {
        category: "Dimsum",
        name: "Há cảo thịt",
        price: 45_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
      {
        category: "Cơm",
        name: "Cơm gà xối mỡ",
        price: 55_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
      {
        category: "Cơm",
        name: "Cơm gà chặt",
        price: 60_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
      {
        category: "Cơm",
        name: "Cơm thịt heo quay",
        price: 60_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
      {
        category: "Cơm",
        name: "Cơm xá xíu",
        price: 55_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
      {
        category: "Cơm",
        name: "Cơm tấm",
        price: 55_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
      {
        category: "Giải Khát",
        name: "Cà phê đá",
        price: 25_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
      {
        category: "Giải Khát",
        name: "Cà phê sữa",
        price: 30_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
      {
        category: "Giải Khát",
        name: "Bạc xỉu",
        price: 30_000,
        url: "https://s3-alpha-sig.figma.com/img/095e/f8c3/20a4137032363e7a18e35d5aaa58821b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7Ou18K1EJi~npp8t0yrglMda7Y8kT6yvlAgZBvm~zcJABH0Do0IbQ93LaWfi0r9smePHZ-7lH-BMCpR8jo3RqsQR5WVwqinQOc61Zj88ZudveST~761H0nOJ7KDtruiN2Aaqw5m~7qo0gH0lYNsvg43NWpw6cnUieJfdyZwFWiDcPQ8c3Q9ftpZpfLc9iOVIL284IyhmjBna0ZPjgv3w5gJpHAnAFAe4IdxRuiUiATIe-zfovB7is9-J97T4mkPGKEWZVGWmolIpewoUVpqA8hXNhshxVaGvPKvn4pxe7me~TECAFw31pFei8bEeVCXgYvrxQSw4TeZ9BJLujoZxg__",
        description:
          "Món ăn hấp dẫn với sợi mì hoặc hủ tiếu dai ngon, kết hợp cùng cá viên chiên giòn tan bên ngoài, mềm ngọt bên trong. Được phục vụ cùng nước lèo thanh ngọt, hòa quyện với rau thơm và hành lá tươi mát.",
        options: [],
      },
    ],
  },
};
