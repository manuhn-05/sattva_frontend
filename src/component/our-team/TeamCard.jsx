import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TeamCard = ({
  name,
  role,
  designation,
  image,
  linkedin,
  profileLink,
}) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative flex flex-col items-center overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      {/* Green Fill Overlay */}
      <motion.div
        variants={{
          rest: { scaleY: 0 },
          hover: { scaleY: 1 },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ transformOrigin: "bottom" }}
        className="absolute inset-0 bg-[#3BAA5D] z-0"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Avatar */}
        <div className="relative h-28 w-28 overflow-hidden rounded-full bg-gray-100">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-gray-500">
              {name?.charAt(0)}
            </div>
          )}
        </div>

        {/* Name */}
        <motion.h3
          variants={{
            rest: { color: "#111827" },
            hover: { color: "#ffffff" },
          }}
          className="mt-4 text-lg font-semibold text-center"
        >
          {name}
        </motion.h3>

        {/* Role */}
        <motion.p
          variants={{
            rest: { color: "#87C620" },
            hover: { color: "#ffffff" },
          }}
          className="text-sm font-medium text-center"
        >
          {role}
        </motion.p>

        {/* Designation */}
        {designation && (
          <motion.p
            variants={{
              rest: { color: "#6B7280" },
              hover: { color: "#ECFDF5" },
            }}
            className="mt-1 text-sm text-center"
          >
            {designation}
          </motion.p>
        )}

        {/* Actions */}
        <motion.div
          variants={{
            rest: { opacity: 0.8 },
            hover: { opacity: 1 },
          }}
          className="mt-4 flex gap-4"
        >
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white underline"
            >
              LinkedIn
            </a>
          )}

          {profileLink && (
            <Link
              to={profileLink}
              className="text-sm font-medium text-white underline"
            >
              View Profile
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
