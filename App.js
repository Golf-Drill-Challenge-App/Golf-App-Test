import {
  GluestackUIProvider,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionContentText,
  AccordionTitleText,
  AccordionIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Accordion
        width="90%"
        type="multiple"
        m="$5"
        borderWidth={1}
        shadowColor="transparent"
        borderColor="$borderLight300"
        $dark-borderColor="$borderDark700"
      >
        <AccordionItem
          value="a"
          borderBottomWidth={1}
          sx={{
            borderBottomColor: "$borderLight300",
            _dark: {
              borderBottomColor: "$borderDark700",
            },
          }}
        >
          <AccordionHeader
            sx={{
              backgroundColor: "$backgroundLight0",
              _dark: {
                backgroundColor: "$backgroundDark950",
              },
            }}
          >
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      What does the "type" prop of the Accordion component do?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon} />
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} />
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            mt="$0"
            pt="$2"
            sx={{
              backgroundColor: "$backgroundLight50",
              _dark: {
                backgroundColor: "$backgroundDark900",
              },
            }}
          >
            <AccordionContentText>
              The type prop determines whether one or multiple items can be
              opened at the same time. The default value is "single" which means
              only one item can be opened at a time.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="b"
          borderBottomWidth={1}
          borderBottomColor="$borderLight300"
          $dark-borderBottomColor="$borderDark700"
        >
          <AccordionHeader
            sx={{
              backgroundColor: "$backgroundLight0",
              _dark: {
                backgroundColor: "$backgroundDark950",
              },
            }}
          >
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      Can I disable the whole accordion?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon} />
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} />
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            mt="$0"
            pt="$2"
            sx={{
              backgroundColor: "$backgroundLight50",
              _dark: {
                backgroundColor: "$backgroundDark900",
              },
            }}
          >
            <AccordionContentText>
              Yes, you can disable the whole accordion by setting the isDisabled
              prop to true on the Accordion component.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="c">
          <AccordionHeader
            sx={{
              backgroundColor: "$backgroundLight0",
              _dark: {
                backgroundColor: "$backgroundDark950",
              },
            }}
          >
            <AccordionTrigger>
              {({ isExpanded }) => {
                return (
                  <>
                    <AccordionTitleText>
                      What is a controlled accordion? How can I make it
                      controlled?
                    </AccordionTitleText>
                    {isExpanded ? (
                      <AccordionIcon as={ChevronUpIcon} />
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} />
                    )}
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent
            mt="$0"
            pt="$2"
            sx={{
              backgroundColor: "$backgroundLight50",
              _dark: {
                backgroundColor: "$backgroundDark900",
              },
            }}
          >
            <AccordionContentText>
              Controlled components refer to the components where the state and
              behaviors are controlled by the Parent component. You can make the
              accordion a controlled component by passing the value prop to the
              Accordion component and setting the onValueChange prop to update
              the value prop. Refer to the controlled accordion example in the
              docs.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </GluestackUIProvider>
  );
}
