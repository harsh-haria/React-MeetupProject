import MainNavigation from "./MainNavigation";
function Layout(props) {
  return (
    <div>
      <MainNavigation sitename="React Application" />
      <main>{props.children}</main>
    </div>
  );
}
export default Layout;
