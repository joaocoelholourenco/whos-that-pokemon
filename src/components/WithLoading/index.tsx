import React from "react";
import { Loading } from "../Loading";

interface WithLoadingProps {
  loading: boolean;
}

export const withLoading = <P extends object>(
  Component: React.ComponentType<P>
) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return (
        <>
          <Component {...(props as P)} />
          {loading && <Loading />}
        </>
      );
    }
  };
