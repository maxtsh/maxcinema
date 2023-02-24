import ReactQueryWrapper from "@/libs/ReactQueryWrapper";
import StyledComponentsRegistry from "@/libs/registry";
import "@/styles/Global.css";

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ReactQueryWrapper>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReactQueryWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
