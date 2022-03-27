import { CardContainer, CardsContainer } from "../../ViewProducts.styled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonWrapper } from "./SkeletonLoading.styled";

const SkeletonLoading = () => {
  return (
    <SkeletonWrapper>
      <CardsContainer>
        {Array.from(new Array(10)).map((arr, i) => {
          return (
            <CardContainer key={i}>
              <Skeleton
                className="skeletonImage"
                borderRadius={4}
                height={271}
                width={194}
              />
              <Skeleton
                borderRadius={8}
                className="skeletonRectangle"
                width={294}
                height={221}
              />
            </CardContainer>
          );
        })}
      </CardsContainer>
    </SkeletonWrapper>
  );
};

export default SkeletonLoading;
