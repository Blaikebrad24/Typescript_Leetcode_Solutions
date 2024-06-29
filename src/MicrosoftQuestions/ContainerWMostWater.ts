/*
Given n non-negative integers where each integer represents the height of a vertical line on a chart.
Find two lines, which together with x-axis forms a container, that holds the biggest amount of water,
return the area of that water

Input Array = [1,8,6,2,5,4,8,3,7]
*/

// Brute force Solution -> Input [5,9,2,1,4] what maximizes the area?
//  TimeComplexity: While loop of (LeftWall<RightWall) - Big O(n)  SpaceComplexity: Constant O(1)
//          First check all areas with the index 0(i.e. 5) being the left wall of the container (Index0 is the first left wall)
//              -First possible area is using index1 (i.e. 9) as the right wall of the container
//              So (area = length*width) -> area = min(5,9) * (1-0) = 5 is max area so far max_area=5
//              -Next check is index0(i.e. 5) as left wall and index2(i.e. 2) at the right wall
//              Formula (area= l * w) -> area= min(5,2) * (2-0) = 4 so max_area is still (max_area=5)
//              -Next check is index3(i.e. 1) as the right wall and index0(i.e. 5) as the left wall
//              Formula (area= l*w) -> area= min(5,1) * (3-0)= 3 so max_area is still (max_area=5)
//              -Next check is index0(i.e. 5) and index4(i.e. 4) -> (area=l*w) -> max_area = min(5,4) * (4-0) = 16 (update max_area=16)
//      Left wall of the container now starts at index1(i.e 9) and repeat the rest of the checks

function maxAreaofWater( waterContainer: number[]): number
{
    // input [0,1,0,2,1,0,1,3,2,1,2,1]

    let leftWall = 0;
    let rightWall = waterContainer.length-1;

    let max_area = 0;


    while(leftWall < rightWall)
        {
            if(waterContainer[leftWall]! < waterContainer[rightWall]!)
                {
                    // if the index that leftWall points to within waterContainer is less than the right pointer value
                    // then the leftpointer value is the maxHeight of the container so we use that as Height for area=l*w
                    // so then the width is rightPointer index - left pointer index is the width
                    max_area = Math.max(max_area, waterContainer[leftWall]! * (rightWall - leftWall))
                    leftWall += 1;
                }else if(waterContainer[leftWall]! == waterContainer[rightWall]!){
                    max_area = Math.max(max_area, waterContainer[leftWall]! * (rightWall - leftWall))
                }else {
                    max_area = Math.max(max_area, waterContainer[rightWall]! * (rightWall - leftWall))
                    rightWall -=1;
                }

        }
        

    return max_area;
}


