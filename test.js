require('dotenv').config();
const axios = require('axios');


postMessage();

function postMessage() {
    const url = 'https://api.line.me/v2/bot/message/push';
    const token = process.env.ACCESS_TOKEN;

    const payload = {
        to: process.env.LINE_ID,　//ユーザーID
        messages: reserveNoticeComponents()
    };

    const params = {
        url: url,
        data: JSON.stringify(payload),
        method: 'post',
        "Content-Type": "application/json",
        headers: {
            Authorization: 'Bearer ' + token,
            "Content-Type": "application/json",
        },
    };
    axios(params)
        .then(res => {console.log(res.status);})
        .catch(error => {console.log(error);})
}

// 予約確定通知
function reserveNoticeComponents(
) {

    return messages = [
        {
            "type": "flex",
            "altText": "テストメッセージ",
            "contents": { //JSON
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": "テストメッセージ",
                            "weight": "bold",
                            "size": "xl",
                            "align": "center",
                            "contents": []
                        }
                        
                    ]
                }
            }
        }
    ]
}

