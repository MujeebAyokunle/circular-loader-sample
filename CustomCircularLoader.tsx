import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const CustomCircularLoader = ({ percentage }: any) => {
    const radius = 90; // Circle radius
    const strokeWidth = 20; // Thickness of the segments

    const circleCircumference = 2 * Math.PI * radius;

    // Each segment will take up 25% of the circle, so divide circumference by 4
    const segmentLength = circleCircumference / 4.7;
    const gapBetweenSegments = 20; // Increased gap between segments

    return (
        <View style={styles.container}>
            <Svg height="200" width="200" viewBox="0 0 200 200">
                <G fill={"rgba(0,0,0,0)"} rotation="-90" origin="100, 100" >
                    {/* White circle to create white center */}
                    <Circle
                        cx="100"
                        cy="100"
                        r={radius - strokeWidth / 2} // Reduced radius for white center
                        stroke="#fafafa" // White center
                        strokeWidth={strokeWidth} // Ensure it doesn't hide segments
                        fill="#fafafa"
                    />

                    {/* First Segment (Red) */}
                    {
                        percentage > 0 && (
                            <Circle
                                cx="100"
                                cy="100"
                                r={radius}
                                stroke="#FF6347"
                                strokeWidth={strokeWidth}
                                strokeDasharray={`${segmentLength - gapBetweenSegments} ${circleCircumference}`}
                                strokeLinecap="round"
                            />
                        )
                    }

                    {/* Second Segment (Orange) */}
                    {
                        percentage > 25 &&
                        <Circle
                            cx="100"
                            cy="100"
                            r={radius}
                            stroke="#FFA500"
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${segmentLength - gapBetweenSegments} ${circleCircumference}`}
                            strokeDashoffset={-(segmentLength + gapBetweenSegments)} // Offset by red segment + gap
                            strokeLinecap="round"
                        />
                    }

                    {/* Third Segment (Green) */}
                    {
                        percentage > 75 &&
                        <Circle
                            cx="100"
                            cy="100"
                            r={radius}
                            stroke="#32CD32"
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${segmentLength - gapBetweenSegments} ${circleCircumference}`}
                            strokeDashoffset={-(2 * segmentLength + 2 * gapBetweenSegments)} // Offset by two segments + gap
                            strokeLinecap="round"
                        />
                    }

                    {/* Fourth Segment (Gray) */}
                    {
                        percentage > 90 &&
                        <Circle
                            cx="100"
                            cy="100"
                            r={radius}
                            stroke="#A9A9A9"
                            strokeWidth={strokeWidth}
                            strokeDasharray={`${segmentLength - gapBetweenSegments} ${circleCircumference}`}
                            strokeDashoffset={-(3 * segmentLength + 3 * gapBetweenSegments)} // Offset by three segments + gap
                            strokeLinecap="round"
                        />
                    }
                </G>
            </Svg>

            {/* Text in the center */}
            <View style={styles.textContainer}>
                <Text style={styles.percentageText}>{percentage}%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        position: 'absolute',
        alignItems: 'center',
    },
    percentageText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'gray',
    },
    statusText: {
        fontSize: 20,
        color: '#000',
    },
});

export default CustomCircularLoader;
