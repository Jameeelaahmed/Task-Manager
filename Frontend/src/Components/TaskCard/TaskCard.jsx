import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TaskCard.module.css";
import { faEllipsis, faUserTie } from "@fortawesome/free-solid-svg-icons";

const TaskCard = () => {
  return (
    <div className={`${styles.taskContainer}`}>
      <FontAwesomeIcon className={styles.icon} icon={faEllipsis} size="lg" />
      <h3>Task Title</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit
        quia minus, ex harum tempore esse. Amet dolor, maiores iste mollitia
        sint voluptatem optio? Quia maxime et nemo blanditiis nostrum?
      </p>
      <div className={styles.cardFooter}>
        <div className={styles.avatar}>
          <FontAwesomeIcon icon={faUserTie} size="lg" />
        </div>
        <span>Due Date: 01/01/2023</span>
      </div>
    </div>
  );
};

export default TaskCard;
