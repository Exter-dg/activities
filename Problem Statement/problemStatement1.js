waterTrap = function(height){
    // water that can be stored in a particular column = min(greatestprefix, greatest suffix) - currval
    let n = height.length;
    let prefix = [];
    let suffix = [];

    // initialize prefix of 0th index and the suffix of the n-1th index
    prefix[0] = height[0];
    suffix[n-1] = height[n-1];

    // Update prefix[i] as the maximum of current, all prev values
    for(let i=1; i<n;i++) {
        prefix[i] = Math.max(prefix[i-1], height[i]);
    }

    // Update suffix[i] as the maximum of current, all next values
    for(let i=n-2;i>=0;i--) {
        suffix[i] = Math.max(suffix[i+1], height[i]);
    }

    // initialize water to 0
    let water = 0;

    // update water that can be stored in the current column as the difference between column height and min of prefix and suffix
    for(let i=0;i<n;i++) {
        water+= Math.min(prefix[i], suffix[i]) - height[i];
    }
    console.log(water);
}

//let height = [0, 1, 0,2,1,0,1,3,2,1,2,1];
let height = [4,2,0,3,2,5];
waterTrap(height);