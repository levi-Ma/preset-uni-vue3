/* 自定义全局类型存放 */
type WillObject = {
  [key: string | symbol | number]: any;
};
type Key = number | string;

type _typeObj = { [anyKey: string]: any };

type HomeBanner = {
  readonly id: number;
  index_banner: string;
}

type Category = {
  readonly id: number;
  type?: string;
  title: string;
  desc: string;
  picture: string;
}

type HomeTab = {
  readonly id: number;
  title: string;
  children: Array<HomeTabChildren>;
}

type HomeTabChildren = {
  readonly id: number;
  author: string;
  title: string;
  cover: string;
  is_collect: number;
  type_name: string;
  is_image: number;
}

type Serve = {
  readonly id: number;
  title: string;
  desc: string;
}

type aboutType = {
  address: string;
  team_desc: string;
  team_title: string;
  telephone: string;
}

type partnerBanner = {
  banner: string;
  title: string;
}

type partnerExpert = {
  desc: string;
  title: string;
}

type aboutTeamItem = {
  readonly id: number;
  desc: string;
  title: string;
}