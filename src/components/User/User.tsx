import { useRecoilValue } from 'recoil';

import { userState } from '../../recoil/User/User';

import { UserWrapper, UserTable, UserFoto, UserInfo, UserInfoStr } from './UserStyle';

export const User = () => {

  const user = useRecoilValue(userState);


  return (
    <UserWrapper>
      <UserTable>
        <UserFoto>IMG</UserFoto>
        <UserInfo>
          <UserInfoStr>User: {user.name}</UserInfoStr>
          <UserInfoStr>Age: {user.age}</UserInfoStr>
          <UserInfoStr>Rating: {user.rating}</UserInfoStr>
        </UserInfo>
      </UserTable>
    </UserWrapper>
  );
}