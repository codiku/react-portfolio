import { Box, Divider, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ProjectsAPI } from "api/projects";
import { SkillBadges } from "./SkillBadges";
import { badgeColors } from "styles/badgeColor";

export function LatestProjects({}) {
  const { data: projects } = useQuery(["projects"], ProjectsAPI.fetchAll);

  const renderProject = (project) => {
    return (
      <div key={project.id}>
        <Image
          w={350}
          src={`${process.env.REACT_APP_API_BASE_URL}${project.attributes.images.data.attributes.url}`}
        />
        <Heading size="md" color="secondary" mt={3} minH={50}>
          <Box
            display={"inline-block"}
            verticalAlign="middle"
            mr={3}
            bg="primary.strong"
            w={25}
            h={1}
          />
          {project.attributes.title}
        </Heading>
        <Box maxW={350}>
          <SkillBadges
            skills={project.attributes.technologies.map((tech) => {
              return {
                label: tech.technologie,
                bg: badgeColors[tech.technologie],
              };
            })}
          />
        </Box>
      </div>
    );
  };
  return (
    <Flex direction={"column"} w="100%">
      <Heading color={"secondary"} size="2xl">
        Latest projects
      </Heading>
      <Flex mt={10} justifyContent={"space-between"}>
        {projects?.map(renderProject)}
      </Flex>
    </Flex>
  );
}
