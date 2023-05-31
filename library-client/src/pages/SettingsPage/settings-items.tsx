import CodeIcon from '@mui/icons-material/Code';
import TokenIcon from '@mui/icons-material/Token';
import LoginIcon from '@mui/icons-material/Login';
import GroupIcon from '@mui/icons-material/Group';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import PsychologyIcon from '@mui/icons-material/Psychology';

export const settings = [
  {
    section: 'Developer',
    icon: CodeIcon,
    children: [
      {
        title: 'Access Tokens',
        link: '/tokens',
        icon: TokenIcon,
      },
    ]
  }, 
  {
    section: 'Access',
    icon: LoginIcon,
    children: [
      {
        title: 'Users & Groups',
        link: '/users',
        icon: TokenIcon,
      },
      {
        title: 'Permissions',
        link: '/permissions',
        icon: GroupIcon,
      },
    ]
  },
  {
    section: 'Manage',
    icon: ManageAccountsIcon,
    children: [
      {
        title: 'My views',
        link: '/views',
        icon: ReviewsIcon,
      },
      {
        title: 'Permissions',
        link: '/permissions',
        icon: AccountBalanceIcon,
      }
    ]
  },
  {
    section: 'Preferences',
    icon: PsychologyIcon,
    children: [
      {
        title: 'Appearance',
        link: '/appearace',
        icon: RoomPreferencesIcon,
      }
    ]
  }
]