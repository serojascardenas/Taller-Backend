import IUserModel from '@/components/User/model';
import { IAuthService } from './interface';
import { MockLogin } from './mock';

/**
 * @export
 * @implements {IAuthService}
 */
const AuthService: IAuthService = {
    /**
     * @param {IUserModel} body
     * @returns {Promise <IUserModel>}
     * @memberof AuthService
     */
    async createUser(body: IUserModel): Promise<IUserModel> {
        try {
            // TODO: user creation
            const user = MockLogin;
            return user;
        } catch (error) {
            throw new Error(error);
        }
    },
    /**
     * @param {IUserModel} body
     * @returns {Promise <IUserModel>}
     * @memberof AuthService
     */
    async getUser(body: IUserModel): Promise<IUserModel> {
        try {
            const user = MockLogin;
            return user;
        } catch (error) {
            throw new Error(error);
        }
    },
};

export default AuthService;
