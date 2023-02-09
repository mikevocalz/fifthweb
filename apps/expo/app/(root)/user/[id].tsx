import { UserDetailScreen } from 'app/features/user/detail-screen'
import { Link, Stack, } from "expo-router";

interface Props {
  navigation: (val: string) => void;
  route: string | string[];
}

export default function UserDetail() {
  return (

    <UserDetailScreen />

  )
}
