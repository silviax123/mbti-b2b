import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';

interface Props {
    width?: string;
    numSteps?: number;
    timeSpan?: number;
    randomness?: number;
    onFinish?: () => void;
}

const ProgressIndicator = ({
    width = '400px',
    numSteps = 10,
    timeSpan = 5000,
    randomness = 0.25,
    onFinish,
}: Props) => {
    const [progress, setProgress] = useState<number>(0);
    const [isComplete, setIsComplete] = useState<boolean>(false);

    useEffect(() => {
        if (isComplete && onFinish) {
            onFinish();
        }
    }, [isComplete, onFinish]);

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];
        const averageProgress = 100 / numSteps;
        const averageTimeSpan = timeSpan / numSteps;
        // at step i for any given progress or time span, randomly add or subtract up to a quarter (randomness) of its value
        const computeVariance = (i: number, value: number) =>
            i * value + (Math.random() < 0.5 ? -1 : 1) * randomness * value * Math.random();
        for (let i = 1; i < numSteps; i++) {
            timers.push(
                setTimeout(
                () => setProgress(computeVariance(i, averageProgress)),
                computeVariance(i, averageTimeSpan),
                ),
            );
        }
        timers.push(
            setTimeout(
                () => setProgress(100),
                timeSpan - randomness * averageTimeSpan * Math.random(),
            ),
            setTimeout(() => setIsComplete(true), timeSpan),
        );
        return () => {
            for (const timer of timers) {
                clearTimeout(timer);
            }
        };
    }, []);

    return <ProgressBar style={width ? { width } : undefined} value={progress} />;
};

export default ProgressIndicator;