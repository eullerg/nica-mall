import { Item } from '@/components/ResultCard';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query;
  const mock: Item[] = [
    {
      id: '1',
      name: `Tênis Nike Air Max (${q})`,
      store: 'Nike Store',
      price: 'R$ 799,90',
      image: 'https://picsum.photos/seed/nike/400/300',
    },
    {
      id: '2',
      name: 'Smartphone Galaxy S23',
      store: 'Samsung',
      price: 'R$ 5.499,00',
      image: 'https://picsum.photos/seed/galaxy/400/300',
    },
    {
      id: '3',
      name: 'Vestido Floral',
      store: 'Zara',
      price: 'R$ 299,90',
      image: 'https://picsum.photos/seed/dress/400/300',
    },
    {
      id: '4',
      name: 'Headphone Bluetooth',
      store: 'JBL Store',
      price: 'R$ 449,90',
      image: 'https://picsum.photos/seed/headphone/400/300',
    },
  ];
  res.status(200).json({ items: mock });
}