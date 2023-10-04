import MonthlyOverviewItem from "../MonthlyOverviewItem/MonthlyOverviewItem";
import classes from "./ExpensesMainInfo.module.css";

const ExpensesMainInfo = ({ expenseAmount }) => {
  return (
    <div className={classes.expensesMainInfo}>
      <MonthlyOverviewItem
        title={"Income"}
        imageName={"wallet.png"}
        value={2500}
        className={"income"}
      />
      <MonthlyOverviewItem
        title={"Expense"}
        imageName={"wallet.png"}
        value={expenseAmount}
        className={"expense"}
      />
      <MonthlyOverviewItem
        title={"Balance"}
        imageName={"balance.png"}
        value={1000}
        className={"balance"}
      />
    </div>
  );
};

export default ExpensesMainInfo;
