const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Для парсинга JSON
app.use(express.json());

// Эндпоинт для получения данных заказа из Telegram-бота
app.post('/api/telegram-order', (req, res) => {
  const { menu, cart, payment, user } = req.body;

  // Валидация входящих данных
  if (!cart || !payment) {
    return res.status(400).json({ error: 'Missing cart or payment data' });
  }

  // Здесь можно обработать заказ: сохранить в БД, отправить админу и т.д.
  console.log('Новый заказ:', { menu, cart, payment, user });

  // Ответить боту об успешном приеме
  res.json({ status: 'success', message: 'Order received' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
