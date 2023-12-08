import {
    Card,    
    Skeleton,    
  } from "@chakra-ui/react";
  
  function ImageShimmer() {
    return (    
      <Card>
        <Skeleton height='200px'/>        
      </Card>
    );
  }
  
  export default ImageShimmer;
  