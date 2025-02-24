export default function handler(req, res) {
    const { page } = req.query;
    const itemsPerPage = 10;
    const totalItems = 100; // Предположительное количество элементов
    const items = Array.from({ length: itemsPerPage }, (_, index) => ({
        text: `Элемент ${index + 1 + (page - 1) * itemsPerPage}`
    }));

    setTimeout(() => {
        res.status(200).json({ items });
    }, 1000); // Имитация задержки сервера
}
