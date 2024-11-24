import { MotionValue, useTransform as transform } from 'framer-motion';

interface Props {
    yProgress: MotionValue<number>
}

const useTransform = ({
    yProgress
}: Props) => {

    const handleTransform = (inputRange: [number, number], value: [number | string, number | string]) => {
        return transform(yProgress, inputRange, value)
    }

    return handleTransform;
};

export default useTransform;