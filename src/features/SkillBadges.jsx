import { Wrap } from "@chakra-ui/react";
import { Badge } from "components/Badge";

export function SkillBadges({ skills }) {
  return (
    <Wrap mt={30} mb={30}>
      {skills.map((skill) => (
        <Badge bg={skill?.bg}>{skill.label}</Badge>
      ))}
    </Wrap>
  );
}
