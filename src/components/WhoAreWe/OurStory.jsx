import { motion } from 'framer-motion';
import { FadeIn } from '../../utils/animations.jsx';

const OurStory = () => {
  const storyText1 =
    "Founded in 2016 at IIT-Madras, Tvasta emerged with a vision to redefine civil construction through deep-tech innovation. In 2020, we unveiled India's first 3D-printed house, turning a research milestone into an industry-defining moment.";

  const storyText2 =
    "Today, we are a vertically integrated construction-tech company that develops 3D printing platforms, smart materials, and proprietary software, powering real-world builds from flood-resilient homes to smart city infrastructure. We're transforming concrete into a tool for innovation, not limitation.";

  const words1 = storyText1.split(' ');
  const words2 = storyText2.split(' ');

  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
      {/* Our Story Section */}
      <div className="flex flex-col items-start gap-[40px] w-full">
        <FadeIn delay={0.2}>
          <h2 className="font-outfit font-semibold text-[32px] md:text-[48px] leading-[60px] text-[#0D192D] w-full">
            Our Story
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-[20px] w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-outfit font-normal text-[20px] md:text-[32px] leading-[150%] tracking-[-0.5px] text-[#1D3357] w-full"
          >
            {words1.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.05,
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-outfit font-normal text-[20px] md:text-[32px] leading-[150%] tracking-[-0.5px] text-[#1D3357] w-full"
          >
            {words2.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{
                  duration: 0.1,
                  delay: words1.length * 0.05 + index * 0.05 + 0.5,
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scrollable Images Section */}
      <div className="w-full overflow-x-auto mt-14 scrollbar-hide">
        <div className="flex gap-6 flex-nowrap">
          {['ourstory1.png', 'ourstory1.png', 'ourstory2.png'].map(
            (img, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] sm:min-w-[400px] lg:min-w-[468px] h-[300px] sm:h-[400px] lg:h-[468px] rounded-[12px] overflow-hidden flex-shrink-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={`/images/Who Are We/${img}`}
                  alt={`Our Story ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
