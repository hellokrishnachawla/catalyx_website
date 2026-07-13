import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/types/team";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
   <div className="group relative w-[260px] sm:w-[270px] md:w-[280px] flex-shrink-0">
      {/* Card */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-md
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-2xl
        "
      >
        {/* Image */}
        <div
          className="
            relative
            h-[360px]
            sm:h-[380px]
            md:h-[390px]
            w-full
            overflow-hidden
          "
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   300px"
            className="
              object-cover
              object-center
              origin-center
              transition-transform
              duration-500
              group-hover:scale-110
            "
            priority={member.isFounder}
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-black/35
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />

          {/* LinkedIn Button */}
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="
              absolute
              top-4
              right-4
              opacity-0
              translate-y-3
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                shadow-lg
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#0A66C2"
                className="h-6 w-6"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0V8zm7.98 0h4.79v2.19h.07c.67-1.27 2.31-2.6 4.76-2.6C22.42 7.59 24 10.09 24 14.02V24h-5v-8.48c0-2.02-.04-4.62-2.82-4.62-2.82 0-3.25 2.2-3.25 4.48V24h-4.95V8z" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Text */}
        <div className="px-5 py-5 text-center">
          <h3 className="text-xl font-semibold text-[#111827]">
            {member.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#6B7280]">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  );
}