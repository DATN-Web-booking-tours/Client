import { getIpAddress } from "./ipaddress-api";
import dayjs from "dayjs";
import CryptoJS from "crypto-js";

export const RedirectVNPay = async () => {
  const date = dayjs();
  let ipAddr; //Địa chỉ IP của khách hàng thực hiện giao dịch.
  await getIpAddress().then((result) => {
    ipAddr = result;
  });

  const tmnCode = "0KDRSS4Q";
  const secretKey = "MKVLD3ARPJCLWNP9503YWKM6XWKBHW6T";
  let vnpUrl = " https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
  const returnUrl = "http://localhost:5173/Home";

  const createDate = parseInt(date.format("YYYYMMDDHHmmss")); //Là thời gian phát sinh giao dịch định dạng yyyyMMddHHmmss
  const orderId = date.format("YYYYMMDDHHmmss") + 123; //Mã tham chiếu của giao dịch tại hệ thống của merchant. Mã này là duy nhất dùng để phân biệt các đơn hàng gửi sang VNPAY. Không được trùng lặp trong ngày.
  const amount = 100000 * 100; //Số tiền thanh toán. Cần nhân thêm 100 lần

  const orderInfo = "Thanh toan thanh cong tren Tour " + 100000 + " VND"; //Thông tin mô tả nội dung thanh toán (Tiếng Việt, không dấu).
  const orderType = "other"; //Mã danh mục hàng hóa.
  const locale = "vn"; //Ngôn ngữ giao diện hiển thị (vn|en).
  const currCode = "VND"; //Đơn vị tiền tệ sử dụng thanh toán.

  // vnp_Params should be sorted by keys
  const vnp_Params: any = {
    vnp_Amount: amount,
    // vnp_BankCode: bankCode, //optional
    vnp_Command: "pay",
    vnp_CreateDate: createDate,
    vnp_CurrCode: currCode,
    vnp_IpAddr: ipAddr,
    vnp_Locale: locale,
    vnp_OrderInfo: orderInfo,
    vnp_OrderType: orderType,
    vnp_ReturnUrl: returnUrl,
    vnp_TmnCode: tmnCode,
    vnp_TxnRef: orderId,
    vnp_Version: "2.1.0",
  };

  const signData = new URLSearchParams(vnp_Params).toString();
  const hmac = CryptoJS.HmacSHA512(signData, secretKey);
  const signed = hmac.toString();
  vnp_Params["vnp_SecureHash"] = signed;
  vnpUrl += "?" + new URLSearchParams(vnp_Params).toString();
  console.log("VNPay url", vnpUrl);
  return vnpUrl;
};

//   export const RedirectVNPay = async (bookingId, paymentAmounts) => {
//     const date = dayjs();
//     let ipAddr; //Địa chỉ IP của khách hàng thực hiện giao dịch.
//     await getIpAddress().then(result => {
//         ipAddr = result
//     });

//     /* https://sandbox.vnpayment.vn/apis/docs/huong-dan-tich-hop */
//     const tmnCode = "0KDRSS4Q";       //Mã website của merchant trên hệ thống của VNPAY
//     const secretKey = "MKVLD3ARPJCLWNP9503YWKM6XWKBHW6T";
//     const vnpUrl = " https://sandbox.vnpayment.vn/paymentv2/vpcpay.html"
//     const returnUrl = "http://localhost:5173/Home";   //URL thông báo kết quả giao dịch khi Khách hàng kết thúc thanh toán.

//     const createDate = parseInt(date.format('YYYYMMDDHHmmss')); //Là thời gian phát sinh giao dịch định dạng yyyyMMddHHmmss
//     const orderId = date.format('YYYYMMDDHHmmss')+bookingId;    //Mã tham chiếu của giao dịch tại hệ thống của merchant. Mã này là duy nhất dùng để phân biệt các đơn hàng gửi sang VNPAY. Không được trùng lặp trong ngày.
//     const amount = paymentAmounts*100;                //Số tiền thanh toán. Cần nhân thêm 100 lần

//     const orderInfo = "Thanh toan dat xe Go "+ paymentAmounts + " VND"; //Thông tin mô tả nội dung thanh toán (Tiếng Việt, không dấu).
//     const orderType = 'other';  //Mã danh mục hàng hóa.
//     const locale = 'vn';        //Ngôn ngữ giao diện hiển thị (vn|en).
//     const currCode = 'VND'      //Đơn vị tiền tệ sử dụng thanh toán.

//     // vnp_Params should be sorted by keys
//     const vnp_Params = {
//       vnp_Amount: amount,
//       // vnp_BankCode: bankCode, //optional
//       vnp_Command: 'pay',
//       vnp_CreateDate: createDate,
//       vnp_CurrCode: currCode,
//       vnp_IpAddr: ipAddr,
//       vnp_Locale: locale,
//       vnp_OrderInfo: orderInfo,
//       vnp_OrderType: orderType,
//       vnp_ReturnUrl: returnUrl,
//       vnp_TmnCode: tmnCode,
//       vnp_TxnRef: orderId,
//       vnp_Version: '2.1.0',
//     };

//     const signData = new URLSearchParams(vnp_Params).toString();
//     const hmac = CryptoJS.HmacSHA512(signData, secretKey);
//     const signed = hmac.toString();
//     vnp_Params['vnp_SecureHash'] = signed;
//     vnpUrl += '?'+ new URLSearchParams(vnp_Params).toString();
//     console.log('VNPay url', vnpUrl);
//     return vnpUrl
//   }