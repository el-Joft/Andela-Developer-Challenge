import {
  authenticationEndpoint,
  changePassword,
  entriesEndpoint,
  getEntryUrlByID,
  registrationEndpoint,
  reminderUrl,
  updateToken,
  userProfile,
  userProfileDetails,
} from '../utils/endpointUrl';

export default class ApiRequestService {
  /**
   *
   * @param httpClient {FetchWrapper}
   */
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  getUserDetails() {
    return this.httpClient.get(userProfileDetails);
  }

  updateUserDetails(data) {
    return this.httpClient.post(userProfile, data);
  }

  changePassword(data) {
    return this.httpClient.post(changePassword, data);
  }

  updateReminder(data) {
    return this.httpClient.put(reminderUrl, data);
  }

  updateGcmToken(data) {
    return this.httpClient.post(updateToken, data);
  }

  deleteGcmToken() {
    return this.httpClient.delete(updateToken);
  }

  authenticateUser(credentials) {
    return this.httpClient.post(authenticationEndpoint, credentials);
  }

  createUser(user) {
    return this.httpClient.post(registrationEndpoint, user);
  }

  getEntries(query) {
    return this.httpClient.get(entriesEndpoint, query);
  }

  updateEntry(id, data) {
    return this.httpClient.put(getEntryUrlByID(id), data);
  }

  createEntry(data) {
    return this.httpClient.post(entriesEndpoint, data);
  }

  deleteEntry(id) {
    return this.httpClient.delete(getEntryUrlByID(id));
  }
}
