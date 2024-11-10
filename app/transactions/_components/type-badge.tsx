import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";
interface TransactionTypeBadgeProps {
  transaction: Transaction;
}
const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type == TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-white hover:bg-muted">
        <CircleIcon className="mr-2 fill-green-500" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type == TransactionType.EXPENSE) {
    return (
      <Badge className="bg-muted font-bold text-white hover:bg-muted">
        <CircleIcon className="mr-2 fill-red-700" size={10} />
        Despesa
      </Badge>
    );
  }
  if (transaction.type == TransactionType.INVESTMENT) {
    return (
      <Badge className="bg-muted font-bold text-white hover:bg-muted">
        <CircleIcon className="mr-2 fill-blue-800" size={10} />
        Investimento
      </Badge>
    );
  }
};

export default TransactionTypeBadge;
