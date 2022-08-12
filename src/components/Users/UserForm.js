import Button from "../UI/Button";
import styles from "./css/UserForm.module.css";

const UserForm = props => {
  return (
    <form className={styles.input}>
      <div>
        <label>User</label>
        <input type="text"/>
      </div>
      <div>
        <label>Age</label>
        <input type="number"/>
      </div>
      <Button />
    </form>
  );
};

export default UserForm;
