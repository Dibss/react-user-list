import Card from "../UI/Card";
import styles from "./css/UserList.module.css";

const UserList = (props) => {

  const userList = props.list;

  let ulContent = (
    userList.map((user) => (
      <li key={user.id}>
        {user.username} ({user.age} years old)
      </li>
    ))
  )

  if(userList.length === 0){
    ulContent = 'There are no registered users'
  }

  return (
    <Card className={styles.users}>
      <ul>
        {ulContent}
      </ul>
    </Card>
  );
};

export default UserList;
