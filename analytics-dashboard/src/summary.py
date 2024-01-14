import os
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from langchain.chat_models import ChatOpenAI
import json

with open('credentials.json') as json_file:
    creds = json.load(json_file)

os.environ['OPENAI_API_KEY'] = creds['OpenAI_Key']

initial_summary_template = '''You are an AI expert in textual analysis, with a specific focus on distilling customer feedback from surveys into clear, concise summaries. 

Guidelines for generating summaries:

1: Start by identifying and grouping responses that refer to the same feature.

2:  For each feature identified, create a short and succinct one sentence summary.

3:  Summary should encapsulate the most relevant feedback, focusing on distinct issues or specific praises. 

4: Summary should not include general sentiments or vague feedback.

LIST OF RESPONSES BEGIN

{RESPONSES}

LIST OF RESPONSE END

Summary :
'''

summary_updation_template = '''You are an AI expert in textual analysis, with a specific focus on distilling customer feedback from surveys into clear, concise summaries. Your task is to update an existing summary with insights from new survey responses. 

Guidelines to update summary : 

1. Review new responses and the existing summary. Group responses by similar features. Determine if the new responses mention features already covered in the summary or introduce new ones.

2. For every identified feature (both existing and new), create a short and succinct one-sentence summary. 

3. Ensure the updated summary highlights distinct issues or specific praises. Avoid general sentiments or vague feedback.

EXISTING SUMMARY BEGINS

{OLD_SUMMARY}

EXISTING SUMMARY ENDS

NEW RESPONSES BEGIN

{NEW_RESPONSES}

NEW RESPONSES END

Modified Summary:'''

initial_summary_prompt = PromptTemplate(
    input_variables=["RESPONSES"], template= initial_summary_template,
    output_key="summary"
)
summary_updation_prompt = PromptTemplate(
    input_variables=["RESPONSES"], template= summary_updation_template,
    output_key="updated_summary"
)

initial_summary_chain = LLMChain(llm= ChatOpenAI(temperature = 0.0, model =  "gpt-3.5-turbo-1106"),
                        prompt= initial_summary_prompt,
                        verbose=True)
summary_updation_chain = LLMChain(llm= ChatOpenAI(temperature = 0.0, model =  "gpt-3.5-turbo-1106"),
                        prompt= summary_updation_prompt,
                        verbose=True)
