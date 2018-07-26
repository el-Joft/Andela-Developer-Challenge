import sql from '../sql';
import Reminder from '../../models/Reminder';

export default class ReminderRepository {
  constructor(db) {
    this.db = db;
  }

  findById(id) {
    return this.db.oneOrNone('SELECT * FROM reminder WHERE user_id = $1', +id)
      .then(Reminder.mapDBReminderEntityToReminder);
  }

  save(input) {
    const entry = { ...input };
    if (!entry.id) {
      return this.db.one(sql.reminder.add, { ...entry })
        .then(Reminder.mapDBReminderEntityToReminder);
    }
    return this.findById(entry.id).then((data) => {
      if (data) {
        const newEntry = { ...data, ...entry };
        return this.db.one(sql.reminder.update, { ...newEntry })
          .then(Reminder.mapDBReminderEntityToReminder);
      }
      return Promise.reject(Error(`Invalid id ${entry.id}`));
    });
  }

  clear() {
    this.users = {};
  }

  create() {
    return this.db.none(sql.reminder.create);
  }
}
