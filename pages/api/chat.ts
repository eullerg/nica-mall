import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { msg } = JSON.parse(req.body || '{}');
  res.status(200).json({ reply: `Estou procurando os melhores resultados para “${msg}” no Manaíra. Aguarde!` });
}